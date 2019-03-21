const initState = {
  projects: [
    {id: 1, title: 'It is a long established fact', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 2, title: 'There are many variations', content: 'It is a long established fact that a reader will be distracted by the readable.'},
    {id: 3, title: 'Contrary to popular belief, Lorem Ipsum is not', content: 'There are many variations of text.'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('CREATE_PROJECT', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('CREATE_PROJECT_ERROR', action.err);
      return state
    default:
      return state;
  }
}

export default projectReducer;