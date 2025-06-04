import { io } from 'socket.io-client';

export default class StreamElements {
    constructor({ JWT }) {
        this.JWT = JWT;
        this.socket = null;
        this.eventHandlers = {
            message: [],
            donation: []
        };
    }

    connect() {
        if (!this.JWT || typeof this.JWT !== 'string') {
            console.log(this.JWT, typeof this.JWT);
            console.error('Invalid or missing JWT token for StreamElements authentication. You goofy ahh fix it');

        }
        console.log('YTIPPEEE! Connecting to StreamElements with JWT:', this.JWT);
        this.socket = io('https://realtime.streamelements.com', {
            transports: ['websocket']
        });
        this.initializeSocketEvents();
    }

    on(event, handler) {
        if (this.eventHandlers[event]) {
            this.eventHandlers[event].push(handler);
        }
    }

    emitEvent(event, data) {
        if (this.eventHandlers[event]) {
            this.eventHandlers[event].forEach(handler => handler(data));
        }
    }

    initializeSocketEvents() {
        this.socket.on('connect', this.onConnect.bind(this));
        this.socket.on('disconnect', this.onDisconnect.bind(this));
        this.socket.on('authenticated', this.onAuthenticated.bind(this));
        this.socket.on('unauthorized', (err) => {
            console.error('Unauthorized:', err);
            this.socket.disconnect();
        });
        this.socket.on('event', (data) => this.handleEvent(data));
        this.socket.on('error', (error) => {
            console.error('Socket error:', error);
        });
    }

    onConnect() {
        this.socket.emit('authenticate', { method: 'jwt', token: this.JWT });
    }


    onAuthenticated(data) {
        console.log('Authenticated with StreamElements:', data);
    }

    onDisconnect() {
        console.log('Disconnected from StreamElements');
    }

    handleEvent(data) {
        const { type, data: eventData } = data;
        if (!eventData) return;
        console.log(`Event type: ${type}`);
        console.log(`Event data:`, eventData);

        if (type === 'tip') {
            const name = eventData.displayName;
            const amount = eventData.amount;
            let message = eventData.message || '';
            this.emitEvent('donation', { name, amount, message });
        } else {
            console.log(`Event received: ${type}`, eventData);
            this.emitEvent('message', JSON.stringify(eventData));
        }
    }
}

