const bulb: string = `💡`;
const bulb_div: HTMLElement | null = document.getElementById('lightbulb');
let pid: number | null = null;
let vals: number[] = [.2, .3, .7, .8, .5];
let enc: number[] = vals.map(mapValueToPixel);
let lastMeasurementTime: number = Date.now();
let yellowClickCount: { top: number, bottom: number } = { top: 0, bottom: 0 };

function flip(): string {
    if (bulb_div!.innerHTML == bulb) return bulb_div!.innerHTML = '';
    return bulb_div!.innerHTML = bulb;
}

const pointsDiv: HTMLElement = document.getElementById("points-div")!;
const codeDiv: HTMLInputElement = document.getElementById('code')! as HTMLInputElement;
pointsDiv.innerHTML = '';

function addPoint() {
    vals.shift(); enc.shift();
    const val: number = Number(codeDiv.value);
    const e: number = mapValueToPixel(val);
    vals.push(val);
    enc.push(mapValueToPixel(vals[vals.length - 1]));
    console.log('val', val, 'e', e);
    const ans: string[] = vals.map((v, i) => `<div class='point' style='margin-left:${(i + 1) * 125}px; top:${mapValueToPixel(v)}px'></div>`);
    console.log(ans, vals);
    pointsDiv.innerHTML = ans.join('');

    // Flash the bulb and notify based on the measurement value
    if (val >= 0.6) {
        flashBulb('Tighten the screw and remeasure');
    } else if (val <= 0.2) {
        flashBulb('Loosen the screw and remeasure');
    } else {
        clearNotification();
    }

    // Reset yellow click count
    yellowClickCount = { top: 0, bottom: 0 };

    // Update last measurement time
    lastMeasurementTime = Date.now();
}

addPoint();

function mapValueToPixel(value: number): number {
    const maxValue: number = 0.6;
    const maxPixel: number = 290;

    // Ensure the value is within the expected range
    if (value < 0) value = 0;
    if (value > maxValue) value = maxValue;

    // Map the value to pixel position
    const ans: number = maxPixel - (value / maxValue * maxPixel);
    console.log('value', value, 'ans', ans);
    return ans;
}

function panic() {
    bulb_div!.style.background = 'red';
    pid = window.setInterval(() => { flip(); }, 300);
}

function calm() {
    bulb_div!.style.background = 'transparent';
    clearInterval(pid!);
    pid = null;
}

function flashBulb(message: string) {
    bulb_div!.style.background = 'red';
    document.getElementById('notification')!.innerText = message;
    pid = window.setInterval(() => { flip(); }, 300);
}

function clearNotification() {
    bulb_div!.style.background = 'transparent';
    document.getElementById('notification')!.innerText = '';
    clearInterval(pid!);
    pid = null;
}

// Handle clicks on yellow bars
document.querySelectorAll('.bar.yellow').forEach((bar, index) => {
    bar.addEventListener('click', () => {
        if (index === 1) { // Top yellow bar
            yellowClickCount.top++;
            if (yellowClickCount.top === 2) {
                panic();
                flashBulb('Tighten the screw and remeasure');
            }
        } else if (index === 4) { // Bottom yellow bar
            yellowClickCount.bottom++;
            if (yellowClickCount.bottom === 2) {
                panic();
                flashBulb('Loosen the screw and remeasure');
            }
        }
    });
});

// Flash the bulb every minute to request a measurement
setInterval(() => {
    if (Date.now() - lastMeasurementTime >= 60000) {
        flashBulb('Please take a measurement');
    }
}, 60000);