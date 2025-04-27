interface IOptions {
    hour: 'numeric' | '2-digit';
    minute: 'numeric' | '2-digit';
    second: 'numeric' | '2-digit';
}

export function formatDate(dateString: string) {
    const date = new Date(dateString);

    const dateOptions: IOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    const timeFormatted = date.toLocaleTimeString('en-US', dateOptions);
    const dateFormatted = date.toLocaleDateString('en-US');
    return `${dateFormatted} ${timeFormatted}`;
}
