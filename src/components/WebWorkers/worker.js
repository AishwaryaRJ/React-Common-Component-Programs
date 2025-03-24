// Create a new worker

self.onMessage = function (event) {
    const number = event.data;
    const result = number * number;
    self.postMessage(result);
}

// Use a worker

const worker = new Worker("worker.js");

worker.postMessage(10);

worker.onMessage = function (event) {
    console.log("Result from worker:", event.data);
}

worker.onerror= function (error) {
    console.log('Worker error:', error);
}