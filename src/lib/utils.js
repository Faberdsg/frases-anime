export function getItemRandom(arr) {
	const indexRandom = Math.floor(Math.random() * arr.length);
	return arr[indexRandom];
}
