export class Todo {
	id: number;
	content: string;

	constructor(dto?: Todo | any) {
		dto = dto || ({} as Todo);

		this.id = dto.id;
		this.content = dto.content;
	}
}
