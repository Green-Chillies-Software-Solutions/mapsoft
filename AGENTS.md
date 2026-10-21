<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Theme preference is managed by the shared header toggle and semantic CSS tokens, restored after hydration and saved locally; this keeps every page consistent without a server dependency.
- Vercel deploy: `vercel.json` (framework null, build `npm run build`) + Node 22; Nitro auto-detects the vercel preset outside the sandbox, `.vercel/output` is gitignored. Why: the Lovable sandbox forces cloudflare-module, but Vercel builds must select their own preset.
