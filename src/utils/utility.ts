export function formatDate(timestamp: string | number | Date){
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}


export function truncateText(inputText: string, length: number): string {
    if (inputText.length <= length) {
      return inputText;
    }
    return inputText.substring(0, length).trim() + '...';
  }
  