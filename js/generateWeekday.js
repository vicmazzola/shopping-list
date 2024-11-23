export function generateWeekday() {
    return `${new Date().toLocaleDateString("en-GB", {weekday: "long"})} (${new Date().toLocaleDateString()}) at ${new Date().toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric"
    })}`;
}
