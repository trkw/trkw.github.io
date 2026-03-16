import{p as e}from"./chunk-LFPYN7LY-BV6Tfkox.js";const o={title:"ブログ始める",date:"2026-02-28"};function s(l){const n={a:"a",p:"p",...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"オープンにしていいお気持ちを表明するために、ブログはあった方がいいかもと思い始めてみることにする。"}),`
`,e.jsx(n.p,{children:`SNSに書くほどでもないけど、頭の中に置いておくには場所を取るな、みたいな思考がある。
誰かに読まれることを前提にすると少し整理されるし、後から自分で読み返せるのも悪くない。`}),`
`,e.jsx(n.p,{children:`X（Twitter）はどうしても短くまとめようとする力が働いて、思考が途中で切れる感じがする。
Zennやnoteはちゃんとした記事を書かなきゃという気持ちになってハードルが上がる。`}),`
`,e.jsx(n.p,{children:"しずかなインターネットはよさそうだなと思いつつ、自分で動かせるものがほしかった。"}),`
`,e.jsxs(n.p,{children:["結局のところ、自分の ",e.jsx(n.a,{href:"https://trkw.github.io",children:"trkw.github.io"})," でスペース書ける場所を作るのが一番しっくりきた。"]}),`
`,e.jsx(n.p,{children:`書く内容はとくに決めていない。
技術的なことかもしれないし、最近見た映画、行ったライブとか、なんとなく考えたこととか、そういうやつ。`}),`
`,e.jsx(n.p,{children:`テーマを決めると続かなくなる気がするので、あまり縛らないようにしたい。
うまくまとまってなくてもいいし、結論が出なくてもいい。
途中で終わっても、それはそれでそういう記事ということにする。`}),`
`,e.jsx(n.p,{children:`ちなみにこのブログ自体は zig と zls だけの依存関係でできているのでシンプルでいい気がしている。
Zig はまだ全然わかってないけど、わからないまま触り続けるのもこの時代的に悪くないかなと思いつつ勉強していきます。`}),`
`,e.jsx(n.p,{children:"続くかどうかはわからないけど、やってみる。"})]})}function i(l={}){const{wrapper:n}=l.components||{};return n?e.jsx(n,{...l,children:e.jsx(s,{...l})}):s(l)}const a=Object.freeze(Object.defineProperty({__proto__:null,default:i,frontmatter:o},Symbol.toStringTag,{value:"Module"})),d={title:"ブログの投稿しやすいようにする",date:"2026-03-02"};function t(l){const n={a:"a",img:"img",p:"p",...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"このブログを始めてからというもの、GitHubで管理するスタイルがなかなか定まらず、毎回書き始めるたびに手が止まってしまっていた。"}),`
`,e.jsx(n.p,{children:"書き味は続けるうえで意外と重要なので、思い切ってiOS / macOS 対応のネイティブアプリとRaycast extensionを作り、下書きと公開済み記事をまとめて管理できるようにしてみた。"}),`
`,e.jsx(n.p,{children:"iOSアプリはシンプルに入力とプレビューを切り替えられるだけで十分で、これだけでも外出先での下書きがかなり楽になった。"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://i.snipp.gg/21908621856211131/cab965435e85d6f8959d6df1b48fe2d9",alt:"作成したiOSアプリケーション"})}),`
`,e.jsxs(n.p,{children:["画像のアップロード先には",e.jsx(n.a,{href:"https://snipp.gg/",children:"snipp.gg"}),`というものを使ってみている。
現状、`,e.jsx(n.a,{href:"https://imgur.com/",children:"imgur"}),"のAPI登録ができないようだった。"]}),`
`,e.jsx(n.p,{children:"macOSアプリとRaycast extensionも一通り作ってみたが、macOSでは結局neovimから記事を編集することが多そうなので、neovimプラグインを現状作ってみている。"}),`
`,e.jsx(n.p,{children:"まずは既存のブログシステムを参考にしながら、必要な機能を少しずつ整えていこうと思う。"})]})}function h(l={}){const{wrapper:n}=l.components||{};return n?e.jsx(n,{...l,children:e.jsx(t,{...l})}):t(l)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:h,frontmatter:d},Symbol.toStringTag,{value:"Module"})),x={title:"Hello, World!",date:"2026-02-26"};function r(l){const n={a:"a",code:"code",figure:"figure",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"はじめに"}),`
`,e.jsxs(n.p,{children:["これは ",e.jsx(n.strong,{children:"Zig"})," で作った静的サイトジェネレーターの最初の記事です。"]}),`
`,e.jsx(n.h2,{children:"特徴"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"依存ゼロ（標準ライブラリのみ）"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArenaAllocator"})," による高速メモリ管理"]}),`
`,e.jsx(n.li,{children:"Markdown → HTML 変換"}),`
`,e.jsx(n.li,{children:"フロントマター対応"}),`
`]}),`
`,e.jsx(n.h2,{children:"コードサンプル"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#1e1e2e",color:"#cdd6f4"},tabIndex:"0","data-language":"zig","data-theme":"catppuccin-mocha",children:e.jsxs(n.code,{"data-language":"zig","data-theme":"catppuccin-mocha",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#CBA6F7"},children:"const"}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:" std "}),e.jsx(n.span,{style:{color:"#94E2D5"},children:"="}),e.jsx(n.span,{style:{color:"#F38BA8",fontStyle:"italic"},children:" @import"}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:"("}),e.jsx(n.span,{style:{color:"#A6E3A1"},children:'"std"'}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:")"}),e.jsx(n.span,{style:{color:"#9399B2"},children:";"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#CBA6F7"},children:"pub"}),e.jsx(n.span,{style:{color:"#CBA6F7"},children:" fn"}),e.jsx(n.span,{style:{color:"#89B4FA",fontStyle:"italic"},children:" main"}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:"() "}),e.jsx(n.span,{style:{color:"#94E2D5"},children:"!"}),e.jsx(n.span,{style:{color:"#CBA6F7"},children:"void"}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:" {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#CDD6F4"},children:"    std"}),e.jsx(n.span,{style:{color:"#94E2D5"},children:"."}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:"debug"}),e.jsx(n.span,{style:{color:"#94E2D5"},children:"."}),e.jsx(n.span,{style:{color:"#89B4FA",fontStyle:"italic"},children:"print"}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:"("}),e.jsx(n.span,{style:{color:"#A6E3A1"},children:'"Hello, Zig!'}),e.jsx(n.span,{style:{color:"#F5C2E7"},children:"\\n"}),e.jsx(n.span,{style:{color:"#A6E3A1"},children:'"'}),e.jsx(n.span,{style:{color:"#9399B2"},children:","}),e.jsx(n.span,{style:{color:"#94E2D5"},children:" ."}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:"{})"}),e.jsx(n.span,{style:{color:"#9399B2"},children:";"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#CDD6F4"},children:"}"})})]})})}),`
`,e.jsx(n.h2,{children:"まとめ"}),`
`,e.jsxs(n.p,{children:["Zig は",e.jsx(n.a,{href:"https://ziglang.org",children:"高速なビルド"}),"と明示的なメモリ管理が魅力です。"]})]})}function j(l={}){const{wrapper:n}=l.components||{};return n?e.jsx(n,{...l,children:e.jsx(r,{...l})}):r(l)}const y=Object.freeze(Object.defineProperty({__proto__:null,default:j,frontmatter:x},Symbol.toStringTag,{value:"Module"})),u={title:"Zig Tips & Tricks",date:"2026-02-27"};function c(l){const n={blockquote:"blockquote",code:"code",figure:"figure",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Allocator を使い分ける"}),`
`,e.jsx(n.p,{children:"Zig にはいくつかのアロケーターがあります。"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"GeneralPurposeAllocator"})," — デバッグ用、リークを検出"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArenaAllocator"})," — 一括解放、パフォーマンス重視"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FixedBufferAllocator"})," — スタック上の固定バッファ"]}),`
`]}),`
`,e.jsx(n.h2,{children:"エラーハンドリング"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#1e1e2e",color:"#cdd6f4"},tabIndex:"0","data-language":"zig","data-theme":"catppuccin-mocha",children:e.jsxs(n.code,{"data-language":"zig","data-theme":"catppuccin-mocha",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#CBA6F7"},children:"const"}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:" result "}),e.jsx(n.span,{style:{color:"#94E2D5"},children:"="}),e.jsx(n.span,{style:{color:"#CBA6F7"},children:" try"}),e.jsx(n.span,{style:{color:"#89B4FA",fontStyle:"italic"},children:" someFunction"}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:"()"}),e.jsx(n.span,{style:{color:"#9399B2"},children:";"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#9399B2",fontStyle:"italic"},children:"// または"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#CBA6F7"},children:"const"}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:" result "}),e.jsx(n.span,{style:{color:"#94E2D5"},children:"="}),e.jsx(n.span,{style:{color:"#89B4FA",fontStyle:"italic"},children:" someFunction"}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:"() "}),e.jsx(n.span,{style:{color:"#CBA6F7"},children:"catch"}),e.jsx(n.span,{style:{color:"#94E2D5"},children:" |"}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:"err"}),e.jsx(n.span,{style:{color:"#94E2D5"},children:"|"}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:" {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#CDD6F4"},children:"    std"}),e.jsx(n.span,{style:{color:"#94E2D5"},children:"."}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:"debug"}),e.jsx(n.span,{style:{color:"#94E2D5"},children:"."}),e.jsx(n.span,{style:{color:"#89B4FA",fontStyle:"italic"},children:"print"}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:"("}),e.jsx(n.span,{style:{color:"#A6E3A1"},children:'"Error: {}'}),e.jsx(n.span,{style:{color:"#F5C2E7"},children:"\\n"}),e.jsx(n.span,{style:{color:"#A6E3A1"},children:'"'}),e.jsx(n.span,{style:{color:"#9399B2"},children:","}),e.jsx(n.span,{style:{color:"#94E2D5"},children:" ."}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:"{err})"}),e.jsx(n.span,{style:{color:"#9399B2"},children:";"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#CBA6F7"},children:"    return"}),e.jsx(n.span,{style:{color:"#CDD6F4"},children:" err"}),e.jsx(n.span,{style:{color:"#9399B2"},children:";"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#CDD6F4"},children:"}"}),e.jsx(n.span,{style:{color:"#9399B2"},children:";"})]})]})})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Zig のエラーは値として扱われます。例外はありません。"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:["これが Zig の哲学です。",e.jsx(n.strong,{children:"明示的であること"}),"。"]})]})}function g(l={}){const{wrapper:n}=l.components||{};return n?e.jsx(n,{...l,children:e.jsx(c,{...l})}):c(l)}const D=Object.freeze(Object.defineProperty({__proto__:null,default:g,frontmatter:u},Symbol.toStringTag,{value:"Module"})),m=Object.assign({"../../content/posts/2026-02-28-blog.mdx":a,"../../content/posts/2026-03-02-blog-app.mdx":p,"../../content/posts/hello-world.mdx":y,"../../content/posts/zig-tips.mdx":D});function f(){return Object.entries(m).map(([l,n])=>({slug:l.replace(/^.*\//,"").replace(/\.mdx$/,""),title:n.frontmatter.title,date:n.frontmatter.date,Component:n.default})).sort((l,n)=>n.date.localeCompare(l.date))}function C(l){return f().find(n=>n.slug===l)}export{C as a,f as g};
