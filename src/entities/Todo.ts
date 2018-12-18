export class Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;

	constructor(dto?: Todo | any) {
		dto = dto || ({} as Todo);

		this.userId = dto.userId;
		this.id = dto.id;
		this.title = dto.content;
		this.completed = dto.completed;
	}
}
