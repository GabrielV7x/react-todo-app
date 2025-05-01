// App.jsx
import { useState } from "react";
import ListSelector from "./components/ListSelector";
import EditListTitle from "./components/EditListTitle";
import TodoList from "./components/TodoList";

const initialLists = [
  {
    id: 1,
    title: "Shopping",
    items: [
      { id: 1, text: "Buy milk", done: false },
      { id: 2, text: "Eggs", done: true },
    ],
  },
  {
    id: 2,
    title: "Work",
    items: [
      { id: 1, text: "Send email", done: false },
    ],
  },
];

function App() {
  const [lists, setLists] = useState(initialLists);
  const [selectedListId, setSelectedListId] = useState(initialLists[0].id);

  const selectedList = lists.find((list) => list.id === selectedListId);

  return (
    <div>
      <h1>📝 My To-Do App</h1>
      <ListSelector
        lists={lists}
        selectedListId={selectedListId}
        onChange={setSelectedListId}
      />
      <EditListTitle
        list={selectedList}
        onRename={(newTitle) => {
          const updated = lists.map((list) =>
            list.id === selectedListId ? { ...list, title: newTitle } : list
          );
          setLists(updated);
        }}
      />
      <TodoList
        list={selectedList}
        onUpdateList={(updatedItems) => {
          const updated = lists.map((list) =>
            list.id === selectedListId ? { ...list, items: updatedItems } : list
          );
          setLists(updated);
        }}
      />
    </div>
  );
}

export default App;
