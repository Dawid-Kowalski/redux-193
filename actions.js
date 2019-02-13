//comment

{
	type: 'ADD_COMMENT',
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
	type: 'EDIT_COMMENT',
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
	type: 'REMOVE_COMMENT',
	id: 1//przykładowe id
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

//assessment comment

{
	type: 'ASSESSMENT_COMMENT',
	id: 1 //przykładowe id,
	isPlus: true
}

function assessmentComment(id, isPlus) {

	count = (counter, isPlus) => {
		if(isPlus) {
			counter++
		} else {
			counter--
		}

		return counter
	}

	return {
		type: ASSESSMENT_COMMENT,
		id,
		counter: count(counter, isPlus)
	}
}