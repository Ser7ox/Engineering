export class Posts {

    private _userId: number;
	private _id: number;
	private _title: string;
	private _body: string;

    constructor (userId: number, id: number, title: string, body: string) {
        this._userId = userId;
        this._id = id;
        this._title = title;
        this._body = body;
    }

    set userId(userId: number) {
		this._userId = userId;
	}

	get userId() {
		return this._userId;
	}

    set id(id: number) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

    set title(title: string) {
		this._title = title;
	}

	get title() {
		return this._title;
	}
    set body(body: string) {
		this._body = body;
	}

	get body() {
		return this._body;
	}
}