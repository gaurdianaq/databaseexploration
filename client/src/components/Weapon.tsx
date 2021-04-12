export default function Weapon(id: number) : JSX.Element {
	if (id % 1 !== 0 && id > -1) {
		throw new TypeError("ID must be a non negative whole number!");
	}
	
	return <div>

	</div>
}