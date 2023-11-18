type Push = {
  id: number;
  type: string;
  name: string;
};

const pushes: Push[] = [
  {
    id: 1,
    type: "cat",
    name: "Molly",
  },
  {
    id: 2,
    type: "dog",
    name: "Shadow",
  },
  {
    id: 3,
    type: "dog",
    name: "Ava",
  },
  {
    id: 4,
    type: "cat",
    name: "Toothless",
  },
  {
    id: 5,
    type: "cat",
    name: "Sunshine",
  },
];

export function getPushes(): Push[] {
  return pushes;
}

export function getPush(id: number): Push | undefined {
  return pushes.find((push) => push.id === id);
}
