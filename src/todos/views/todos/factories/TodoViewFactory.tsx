import { Todo } from '../../../stores/Todo';
import { ViewType } from '../../../stores/viewControlsStore';
import TodoListItem from '../todo/listitem/TodoListItem';
import TodoTableRow from '../todo/tablerow/TodoTableRow';

export default class TodoViewFactory {
  static createTodoView(viewType: ViewType, todo: Todo) {
    if (viewType === 'list') {
      return <TodoListItem key={todo.id} todo={todo} />;
    } else if (viewType === 'table') {
      return <TodoTableRow key={todo.id} todo={todo} />;
    }

    throw new Error('Unsupported view type');
  }
}
