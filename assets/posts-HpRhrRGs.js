import{p as n}from"./chunk-LFPYN7LY-BV6Tfkox.js";const i={title:"ブログ始める",date:"2026-02-28"};function l(s){const e={a:"a",p:"p",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"オープンにしていいお気持ちを表明するために、ブログはあった方がいいかもと思い始めてみることにする。"}),`
`,n.jsx(e.p,{children:`SNSに書くほどでもないけど、頭の中に置いておくには場所を取るな、みたいな思考がある。
誰かに読まれることを前提にすると少し整理されるし、後から自分で読み返せるのも悪くない。`}),`
`,n.jsx(e.p,{children:`X（Twitter）はどうしても短くまとめようとする力が働いて、思考が途中で切れる感じがする。
Zennやnoteはちゃんとした記事を書かなきゃという気持ちになってハードルが上がる。`}),`
`,n.jsx(e.p,{children:"しずかなインターネットはよさそうだなと思いつつ、自分で動かせるものがほしかった。"}),`
`,n.jsxs(e.p,{children:["結局のところ、自分の ",n.jsx(e.a,{href:"https://trkw.github.io",children:"trkw.github.io"})," でスペース書ける場所を作るのが一番しっくりきた。"]}),`
`,n.jsx(e.p,{children:`書く内容はとくに決めていない。
技術的なことかもしれないし、最近見た映画、行ったライブとか、なんとなく考えたこととか、そういうやつ。`}),`
`,n.jsx(e.p,{children:`テーマを決めると続かなくなる気がするので、あまり縛らないようにしたい。
うまくまとまってなくてもいいし、結論が出なくてもいい。
途中で終わっても、それはそれでそういう記事ということにする。`}),`
`,n.jsx(e.p,{children:`ちなみにこのブログ自体は zig と zls だけの依存関係でできているのでシンプルでいい気がしている。
Zig はまだ全然わかってないけど、わからないまま触り続けるのもこの時代的に悪くないかなと思いつつ勉強していきます。`}),`
`,n.jsx(e.p,{children:"続くかどうかはわからないけど、やってみる。"})]})}function d(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}const a=Object.freeze(Object.defineProperty({__proto__:null,default:d,frontmatter:i},Symbol.toStringTag,{value:"Module"})),h={title:"ブログの投稿しやすいようにする",date:"2026-03-02"};function t(s){const e={a:"a",img:"img",p:"p",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"このブログを始めてからというもの、GitHubで管理するスタイルがなかなか定まらず、毎回書き始めるたびに手が止まってしまっていた。"}),`
`,n.jsx(e.p,{children:"書き味は続けるうえで意外と重要なので、思い切ってiOS / macOS 対応のネイティブアプリとRaycast extensionを作り、下書きと公開済み記事をまとめて管理できるようにしてみた。"}),`
`,n.jsx(e.p,{children:"iOSアプリはシンプルに入力とプレビューを切り替えられるだけで十分で、これだけでも外出先での下書きがかなり楽になった。"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://i.snipp.gg/21908621856211131/cab965435e85d6f8959d6df1b48fe2d9",alt:"作成したiOSアプリケーション"})}),`
`,n.jsxs(e.p,{children:["画像のアップロード先には",n.jsx(e.a,{href:"https://snipp.gg/",children:"snipp.gg"}),`というものを使ってみている。
現状、`,n.jsx(e.a,{href:"https://imgur.com/",children:"imgur"}),"のAPI登録ができないようだった。"]}),`
`,n.jsx(e.p,{children:"macOSアプリとRaycast extensionも一通り作ってみたが、macOSでは結局neovimから記事を編集することが多そうなので、neovimプラグインを現状作ってみている。"}),`
`,n.jsx(e.p,{children:"まずは既存のブログシステムを参考にしながら、必要な機能を少しずつ整えていこうと思う。"})]})}function x(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:x,frontmatter:h},Symbol.toStringTag,{value:"Module"})),j={title:"ブログをZigからVite+に移行した",date:"2026-03-16"};function r(s){const e={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:`このブログは最初 Zig の静的サイトジェネレーターで動かしていた。
依存ゼロで標準ライブラリだけ、ビルドも速くてシンプルで気に入っていたけど、MDX を使いたくなったりコンポーネントを差し込みたくなったりして、だんだん Zig だけでは辛くなってきた。`}),`
`,n.jsx(e.p,{children:"それで React Router v7 + Vite+ (vite-plus) という構成に移行した。"}),`
`,n.jsx(e.h2,{children:"なぜ Vite+ にしたか"}),`
`,n.jsxs(e.p,{children:[`Vite+ は Vite のチームが作っている統合ツールチェインで、Vite / Rolldown / Vitest / oxlint / oxfmt がまとめて入っている。
個別にバージョン管理しなくていいのが楽で、`,n.jsx(e.code,{children:"vp dev"})," と ",n.jsx(e.code,{children:"vp build"})," だけで開発とビルドが完結する。"]}),`
`,n.jsxs(e.p,{children:["React Router v7 は ",n.jsx(e.code,{children:"ssr: false"})," でもプリレンダリングに対応していて、",n.jsx(e.code,{children:"react-router.config.ts"})," に ",n.jsx(e.code,{children:"prerender()"})," を書くだけで静的 HTML を吐いてくれる。GitHub Pages へのデプロイも問題ない。"]}),`
`,n.jsx(e.h2,{children:"移行してよかったこと"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"MDX が使える"})," — frontmatter も remark / rehype プラグインで処理できる"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"シンタックスハイライト"})," — rehype-pretty-code + Shiki でコードブロックがきれいになった"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ホットリロード"})," — Zig のときは毎回ビルドし直していたので、これだけでも体験が違う"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"デプロイが簡単"})," — GitHub Actions で ",n.jsx(e.code,{children:"pnpm install"})," → ",n.jsx(e.code,{children:"react-router build"})," → ",n.jsx(e.code,{children:"gh-pages"})," に push するだけ"]}),`
`]}),`
`,n.jsx(e.h2,{children:"ハマったところ"}),`
`,n.jsxs(e.p,{children:["CI で ",n.jsx(e.code,{children:"vp build"}),` を使ったら、プリレンダリングが走らず HTML が生成されなかった。
ローカルでは問題ないのに CI だけ再現する、という地味に厄介なやつ。`]}),`
`,n.jsxs(e.p,{children:["結局 ",n.jsx(e.code,{children:"react-router build"})," を直接使うことで解決した。",n.jsx(e.code,{children:"vp build"})," は内部で Vite 8 を使っていて、React Router プラグインのプリレンダリングステップとの噛み合わせが悪かったらしい。"]}),`
`,n.jsxs(e.p,{children:["ついでに CI を devenv/Nix ベースから ",n.jsx(e.code,{children:"pnpm/action-setup"})," + ",n.jsx(e.code,{children:"setup-node"})," に切り替えたら、ビルド時間が 1分50秒から 22秒に縮んだ。"]}),`
`,n.jsx(e.h2,{children:"Zig はどうするか"}),`
`,n.jsx(e.p,{children:`Zig 自体は引き続き触っていきたい。
ブログのビルドツールとしては役目を終えたけど、Zig で静的サイトジェネレーターを作った経験はそれはそれで面白かった。
アロケーターを意識しながらコードを書く感覚は、普段 JS/TS ばかり触っていると新鮮だった。`}),`
`,n.jsx(e.p,{children:"このブログは気軽に書ける場所にしたかったので、慣れた技術スタックに寄せたのは正解だったと思う。"})]})}function u(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}const g=Object.freeze(Object.defineProperty({__proto__:null,default:u,frontmatter:j},Symbol.toStringTag,{value:"Module"})),y={title:"Hello, World!",date:"2026-02-26"};function c(s){const e={a:"a",code:"code",figure:"figure",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:"はじめに"}),`
`,n.jsxs(e.p,{children:["これは ",n.jsx(e.strong,{children:"Zig"})," で作った静的サイトジェネレーターの最初の記事です。"]}),`
`,n.jsx(e.h2,{children:"特徴"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"依存ゼロ（標準ライブラリのみ）"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ArenaAllocator"})," による高速メモリ管理"]}),`
`,n.jsx(e.li,{children:"Markdown → HTML 変換"}),`
`,n.jsx(e.li,{children:"フロントマター対応"}),`
`]}),`
`,n.jsx(e.h2,{children:"コードサンプル"}),`
`,n.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:n.jsx(e.pre,{style:{backgroundColor:"#1e1e2e",color:"#cdd6f4"},tabIndex:"0","data-language":"zig","data-theme":"catppuccin-mocha",children:n.jsxs(e.code,{"data-language":"zig","data-theme":"catppuccin-mocha",style:{display:"grid"},children:[n.jsxs(e.span,{"data-line":"",children:[n.jsx(e.span,{style:{color:"#CBA6F7"},children:"const"}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:" std "}),n.jsx(e.span,{style:{color:"#94E2D5"},children:"="}),n.jsx(e.span,{style:{color:"#F38BA8",fontStyle:"italic"},children:" @import"}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:"("}),n.jsx(e.span,{style:{color:"#A6E3A1"},children:'"std"'}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:")"}),n.jsx(e.span,{style:{color:"#9399B2"},children:";"})]}),`
`,n.jsx(e.span,{"data-line":"",children:" "}),`
`,n.jsxs(e.span,{"data-line":"",children:[n.jsx(e.span,{style:{color:"#CBA6F7"},children:"pub"}),n.jsx(e.span,{style:{color:"#CBA6F7"},children:" fn"}),n.jsx(e.span,{style:{color:"#89B4FA",fontStyle:"italic"},children:" main"}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:"() "}),n.jsx(e.span,{style:{color:"#94E2D5"},children:"!"}),n.jsx(e.span,{style:{color:"#CBA6F7"},children:"void"}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:" {"})]}),`
`,n.jsxs(e.span,{"data-line":"",children:[n.jsx(e.span,{style:{color:"#CDD6F4"},children:"    std"}),n.jsx(e.span,{style:{color:"#94E2D5"},children:"."}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:"debug"}),n.jsx(e.span,{style:{color:"#94E2D5"},children:"."}),n.jsx(e.span,{style:{color:"#89B4FA",fontStyle:"italic"},children:"print"}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:"("}),n.jsx(e.span,{style:{color:"#A6E3A1"},children:'"Hello, Zig!'}),n.jsx(e.span,{style:{color:"#F5C2E7"},children:"\\n"}),n.jsx(e.span,{style:{color:"#A6E3A1"},children:'"'}),n.jsx(e.span,{style:{color:"#9399B2"},children:","}),n.jsx(e.span,{style:{color:"#94E2D5"},children:" ."}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:"{})"}),n.jsx(e.span,{style:{color:"#9399B2"},children:";"})]}),`
`,n.jsx(e.span,{"data-line":"",children:n.jsx(e.span,{style:{color:"#CDD6F4"},children:"}"})})]})})}),`
`,n.jsx(e.h2,{children:"まとめ"}),`
`,n.jsxs(e.p,{children:["Zig は",n.jsx(e.a,{href:"https://ziglang.org",children:"高速なビルド"}),"と明示的なメモリ管理が魅力です。"]})]})}function m(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(c,{...s})}):c(s)}const f=Object.freeze(Object.defineProperty({__proto__:null,default:m,frontmatter:y},Symbol.toStringTag,{value:"Module"})),D={title:"Zig Tips & Tricks",date:"2026-02-27"};function o(s){const e={blockquote:"blockquote",code:"code",figure:"figure",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:"Allocator を使い分ける"}),`
`,n.jsx(e.p,{children:"Zig にはいくつかのアロケーターがあります。"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"GeneralPurposeAllocator"})," — デバッグ用、リークを検出"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ArenaAllocator"})," — 一括解放、パフォーマンス重視"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"FixedBufferAllocator"})," — スタック上の固定バッファ"]}),`
`]}),`
`,n.jsx(e.h2,{children:"エラーハンドリング"}),`
`,n.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:n.jsx(e.pre,{style:{backgroundColor:"#1e1e2e",color:"#cdd6f4"},tabIndex:"0","data-language":"zig","data-theme":"catppuccin-mocha",children:n.jsxs(e.code,{"data-language":"zig","data-theme":"catppuccin-mocha",style:{display:"grid"},children:[n.jsxs(e.span,{"data-line":"",children:[n.jsx(e.span,{style:{color:"#CBA6F7"},children:"const"}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:" result "}),n.jsx(e.span,{style:{color:"#94E2D5"},children:"="}),n.jsx(e.span,{style:{color:"#CBA6F7"},children:" try"}),n.jsx(e.span,{style:{color:"#89B4FA",fontStyle:"italic"},children:" someFunction"}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:"()"}),n.jsx(e.span,{style:{color:"#9399B2"},children:";"})]}),`
`,n.jsx(e.span,{"data-line":"",children:n.jsx(e.span,{style:{color:"#9399B2",fontStyle:"italic"},children:"// または"})}),`
`,n.jsxs(e.span,{"data-line":"",children:[n.jsx(e.span,{style:{color:"#CBA6F7"},children:"const"}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:" result "}),n.jsx(e.span,{style:{color:"#94E2D5"},children:"="}),n.jsx(e.span,{style:{color:"#89B4FA",fontStyle:"italic"},children:" someFunction"}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:"() "}),n.jsx(e.span,{style:{color:"#CBA6F7"},children:"catch"}),n.jsx(e.span,{style:{color:"#94E2D5"},children:" |"}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:"err"}),n.jsx(e.span,{style:{color:"#94E2D5"},children:"|"}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:" {"})]}),`
`,n.jsxs(e.span,{"data-line":"",children:[n.jsx(e.span,{style:{color:"#CDD6F4"},children:"    std"}),n.jsx(e.span,{style:{color:"#94E2D5"},children:"."}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:"debug"}),n.jsx(e.span,{style:{color:"#94E2D5"},children:"."}),n.jsx(e.span,{style:{color:"#89B4FA",fontStyle:"italic"},children:"print"}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:"("}),n.jsx(e.span,{style:{color:"#A6E3A1"},children:'"Error: {}'}),n.jsx(e.span,{style:{color:"#F5C2E7"},children:"\\n"}),n.jsx(e.span,{style:{color:"#A6E3A1"},children:'"'}),n.jsx(e.span,{style:{color:"#9399B2"},children:","}),n.jsx(e.span,{style:{color:"#94E2D5"},children:" ."}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:"{err})"}),n.jsx(e.span,{style:{color:"#9399B2"},children:";"})]}),`
`,n.jsxs(e.span,{"data-line":"",children:[n.jsx(e.span,{style:{color:"#CBA6F7"},children:"    return"}),n.jsx(e.span,{style:{color:"#CDD6F4"},children:" err"}),n.jsx(e.span,{style:{color:"#9399B2"},children:";"})]}),`
`,n.jsxs(e.span,{"data-line":"",children:[n.jsx(e.span,{style:{color:"#CDD6F4"},children:"}"}),n.jsx(e.span,{style:{color:"#9399B2"},children:";"})]})]})})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Zig のエラーは値として扱われます。例外はありません。"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:["これが Zig の哲学です。",n.jsx(e.strong,{children:"明示的であること"}),"。"]})]})}function _(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}const C=Object.freeze(Object.defineProperty({__proto__:null,default:_,frontmatter:D},Symbol.toStringTag,{value:"Module"})),F=Object.assign({"../../content/posts/2026-02-28-blog.mdx":a,"../../content/posts/2026-03-02-blog-app.mdx":p,"../../content/posts/2026-03-16-zig-to-vite-plus.mdx":g,"../../content/posts/hello-world.mdx":f,"../../content/posts/zig-tips.mdx":C});function b(){return Object.entries(F).map(([s,e])=>({slug:s.replace(/^.*\//,"").replace(/\.mdx$/,""),title:e.frontmatter.title,date:e.frontmatter.date,Component:e.default})).sort((s,e)=>e.date.localeCompare(s.date))}function S(s){return b().find(e=>e.slug===s)}export{S as a,b as g};
