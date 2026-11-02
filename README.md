# magpie-agent-doubao

[豆包](https://www.doubao.com/) desktop's agent mode as a [magpie](https://usemagpie.ai) agent:
magpie's Library can hand the app its skills.

## Install

```
magpie plugin add github:kaikaikid/magpie-agent-doubao
```

Then open magpie's **Library › Skills** page and light the **豆包** chip on the skills you want the
app to have. Untick it and magpie takes its own entries out again.

From the command line, one skill at a time:

```
magpie library skill agents <skill> claude,codex,…,doubao
```

## Where the skills go

Doubao's agent mode reads `SKILL.md` folders — the same spec magpie's Library keeps — from its
profile workspace:

```
%LOCALAPPDATA%\Doubao\User Data\Default\.doubao\agent_mode\workspace\
  .skills\        ByteDance's own, one folder per built-in skill — this plugin never touches it
  .user_skills\   yours — where magpie links what you tick
```

## What it can't do

**It gives skills, not models.** 豆包 runs on its own ByteDance sign-in and names no provider
anywhere in its files, so there is nothing for magpie to point at a gateway. The Agents page lists
豆包 with a single `provider` switch, and switching it on fails with that reason rather than
writing a config nothing reads.

## Notes

- The paths name the `Default` profile. If you use `Profile 1` or `Profile 3`, change both paths in
  `doubao.agent.js` and add the file with `magpie plugin add ./doubao.agent.js`.
- magpie links a skill folder, which on Windows is a symlink with Developer Mode on and a junction
  without it. Should the app list nothing for a linked skill, give that skill as a copy instead —
  the Library page's per-skill **How**, or the whole Library at once.
- Skills you put in `.user_skills` by hand are listed by magpie as the app's own, and offered to the
  Library. Naming one after a Library skill doesn't overwrite it: the app's copy is kept aside with
  magpie's backups first.

## Icon

Doubao's own mark (ByteDance), the SVG magpie already bundles as `icons/doubao-color.svg`, inlined
as a data URI because an agent module loads no files of its own.

## Verified

Windows 10, 豆包 2.34.6, magpie 0.1.2711.
