
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';



//comment

{
	type: ADD_COMMENT,
	text: 'tekst'
}

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

//edit comment

{
	type: EDIT_COMMENT,
	text: 'nowy text',
	id: 1//przykładowe id
}

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
}

//remove comment

{
	type: REMOVE_COMMENT,
	id: 1//przykładowe id
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

//like

{
	type: LIKE,
	id: 1 //przykładowe id,
	counter: 1 // przykladowa wartość licznika
}

function assessmentComment(id) {

	return {
		type: LIKE,
		id,
		counter++
	}
}

{
	type: DISLIKE,
	id: 1 //przykładowe id,
	counter: 1 // przykladowa wartość licznika
}

function assessmentComment(id) {

	return {
		type: DISLIKE,
		id,
		counter++
	}
}