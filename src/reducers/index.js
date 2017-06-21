import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import loadingReducer from './loadingReducer';

import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  searchReducer:searchReducer,
  loadingReducer:loadingReducer,

  books: BooksReducer,
  activeBook: ActiveBook,
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
