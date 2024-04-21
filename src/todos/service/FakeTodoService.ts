import { Todo } from '../stores/Todo';
import { TodoService } from './TodoService';

class FakeTodoService implements TodoService {
  createTodo(todo: Todo): Promise<Error | null> {
    if (Math.random() > 0.7) {
      return Promise.resolve(new Error());
    } else {
      return Promise.resolve(null);
    }
  }

  getTodos(): Promise<[Todo[], Error | null]> {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const randomValue = Math.random();

        if (randomValue < 0.7) {
          resolve([[{ id: '1', title: 'Dummy todo', isDone: false }], null]);
        } else {
          resolve([[], new Error()]);
        }
      }, 1500)
    );
  }
}

const todoService = new FakeTodoService();
export default todoService;
