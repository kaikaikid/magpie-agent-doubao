// 豆包 (Doubao desktop) as a magpie agent: magpie's Library can give the app its skills.
//
// Doubao runs on its own ByteDance sign-in and names no provider anywhere in its
// files, so its requests can't be routed through magpie. connect says that plainly
// instead of writing a config nothing reads — the plugin is for skills only.
//
// Its agent mode reads SKILL.md folders, the same spec magpie's Library keeps, under
// <profile>/.doubao/agent_mode/workspace/: .skills is ByteDance's own and is never
// touched; .user_skills is the user's, and is where the Library writes.

// The mark is Doubao's own (ByteDance), 1153 bytes, the SVG magpie already bundles
// as icons/doubao-color.svg; inlined because an agent module loads no files.
const icon = 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkRvdWJhbzwvdGl0bGU+PHBhdGggZD0iTTUuMzEgMTUuNzU2Yy4xNzItMy43NSAxLjg4My01Ljk5OSAyLjU0OS02LjczOS0zLjI2IDIuMDU4LTUuNDI1IDUuNjU4LTYuMzU4IDguMzA4djEuMTJDMS41MDEgMjEuNTEzIDQuMjI2IDI0IDcuNTkgMjRhNi41OSA2LjU5IDAgMDAyLjItLjM3NWMuMzUzLS4xMi43LS4yNDggMS4wMzktLjM3OC45MTMtLjg5OSAxLjY1LTEuOTEgMi4yNDMtMi45OTItNC44NzcgMi40MzEtNy45NzQuMDcyLTcuNzYzLTQuNWwuMDAyLjAwMXoiIGZpbGw9IiMxRTM3RkMiPjwvcGF0aD48cGF0aCBkPSJNMjIuNTcgMTAuMjgzYy0xLjIxMi0uOTAxLTQuMTA5LTIuNDA0LTcuMzk3LTIuOC4yOTUgMy43OTIuMDkzIDguNzY2LTIuMSAxMi43NzNhMTIuNzgyIDEyLjc4MiAwIDAxLTIuMjQ0IDIuOTkyYzMuNzY0LTEuNDQ4IDYuNzQ2LTMuNDU3IDguNTk2LTUuMjE5IDIuODItMi42ODMgMy4zNTMtNS4xNzggMy4zNjEtNi42NmEyLjczNyAyLjczNyAwIDAwLS4yMTYtMS4wODR2LS4wMDJ6IiBmaWxsPSIjMzdFMUJFIj48L3BhdGg+PHBhdGggZD0iTTE0LjMwMyAxLjg2N0MxMi45NTUuNyAxMS4yNDggMCA5LjM5IDAgNy41MzIgMCA1Ljg4My42NzcgNC41NDUgMS44MDcgMi43OTEgMy4yOSAxLjYyNyA1LjU1NyAxLjUgOC4xMjV2OS4yMDFjLjkzMi0yLjY1IDMuMDk3LTYuMjUgNi4zNTctOC4zMDcuNS0uMzE4IDEuMDI1LS41OTUgMS41NjktLjgyOSAxLjg4My0uODAxIDMuODc4LS45MzIgNS43NDYtLjcwNi0uMjIyLTIuODMtLjcxOC01LjAwMi0uODctNS42MTdoLjAwMXoiIGZpbGw9IiNBNTY5RkYiPjwvcGF0aD48cGF0aCBkPSJNMTcuMzA1IDQuOTYxYTE5OS40NyAxOTkuNDcgMCAwMS0xLjA4LTEuMDk0Yy0uMjAyLS4yMTMtLjM5OC0uNDE5LS41ODYtLjYyMmwtMS4zMzMtMS4zNzhjLjE1MS42MTUuNjQ4IDIuNzg2Ljg2OSA1LjYxNyAzLjI4OC4zOTUgNi4xODUgMS44OTggNy4zOTYgMi44LTEuMzA2LTEuMjc1LTMuNDc1LTMuNDg3LTUuMjY2LTUuMzIzeiIgZmlsbD0iIzFFMzdGQyI+PC9wYXRoPjwvc3ZnPg==';

export const agent = {
  id: 'doubao',
  name: '豆包',
  icon,
  // the app's profile root: 豆包 counts as installed while this is here
  dir: '~/AppData/Local/Doubao/User Data',
  // no config of Doubao's magpie could edit; nothing is ever written here
  config: '~/AppData/Local/Doubao/User Data/Default/.doubao/magpie.json',
  library: {
    // the user's own skills
    skills: '~/AppData/Local/Doubao/User Data/Default/.doubao/agent_mode/workspace/.user_skills',
  },
}

export function connect() {
  throw new Error('豆包 names no provider of its own: it runs on its ByteDance sign-in, so magpie gives it skills, not models')
}
