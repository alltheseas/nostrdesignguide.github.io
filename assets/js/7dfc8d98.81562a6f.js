"use strict";(self.webpackChunknostr_design=self.webpackChunknostr_design||[]).push([[2273],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(i),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return i?n.createElement(m,s(s({ref:t},u),{},{components:i})):n.createElement(m,s({ref:t},u))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,s=new Array(a);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:o,s[1]=r;for(var c=2;c<a;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8854:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=i(7462),o=(i(7294),i(3905));const a={sidebar_position:3},s="Guiding Principles",r={unversionedId:"guiding-principles",id:"guiding-principles",title:"Guiding Principles",description:"Use this page as a cheat sheet for the guiding principles of Nostr. These principles are meant to help you make decisions about your client and to help you understand the reasoning behind the design decisions made in the reference designs. They also serve as a quick reminder - a north star so to speak - to keep you focused.",source:"@site/docs/guiding-principles.md",sourceDirName:".",slug:"/guiding-principles",permalink:"/docs/guiding-principles",draft:!1,editUrl:"https://github.com/nostrdesignguide/nostrdesignguide.github.io/tree/main/docs/guiding-principles.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Unique Design Challenges",permalink:"/docs/unique-design-challenges"},next:{title:"Product Design Considerations",permalink:"/docs/category/product-design-considerations"}},l={},c=[{value:"Nostr Guiding Principles",id:"nostr-guiding-principles",level:2},{value:"User Sovereignty",id:"user-sovereignty",level:3},{value:"Make Use of Interoperability",id:"make-use-of-interoperability",level:3},{value:"Keep it Flexible",id:"keep-it-flexible",level:3},{value:"Design Principles",id:"design-principles",level:2},{value:"Fastest Path to Awesome",id:"fastest-path-to-awesome",level:3},{value:"Keep it Simple",id:"keep-it-simple",level:3},{value:"Make it Fast",id:"make-it-fast",level:3},{value:"User-Centric Design",id:"user-centric-design",level:3},{value:"Make Your Most Important Asks Prominent",id:"make-your-most-important-asks-prominent",level:3},{value:"Avoid Jargon",id:"avoid-jargon",level:3},{value:"Provide Feedback",id:"provide-feedback",level:3},{value:"Maintain Consistency",id:"maintain-consistency",level:3},{value:"Stick to Known Patterns When Possible",id:"stick-to-known-patterns-when-possible",level:3},{value:"Make it Accessible",id:"make-it-accessible",level:3},{value:"Minimize Errors",id:"minimize-errors",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"guiding-principles"},"Guiding Principles"),(0,o.kt)("img",{src:i(5151).Z}),(0,o.kt)("p",null,"Use this page as a cheat sheet for the guiding principles of Nostr. These principles are meant to help you make decisions about your client and to help you understand the reasoning behind the design decisions made in the reference designs. They also serve as a quick reminder - a north star so to speak - to keep you focused. "),(0,o.kt)("h2",{id:"nostr-guiding-principles"},"Nostr Guiding Principles"),(0,o.kt)("h3",{id:"user-sovereignty"},"User Sovereignty"),(0,o.kt)("p",null,"Nostr is based on the idea that users should have control over their data and their experience. This means that users should be able to choose how they interact with the network, what they see and how they see it. As designers and developers we aim to prioritize user choice above all. In practice, this means:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users can always choose which relays to join or leave"),(0,o.kt)("li",{parentName:"ul"},"Users can always choose which topics to follow or unfollow"),(0,o.kt)("li",{parentName:"ul"},"Clients should avoid censoring anything they disagree with. Instead, they should give users the option to filter out content they do not wish to see."),(0,o.kt)("li",{parentName:"ul"},'Users must retain control over their private keys. No client or company should lock users into their platforms by "holding on" to the user\'s private key. '),(0,o.kt)("li",{parentName:"ul"},"Users should be able to choose how they interact with the network. This means that clients should not force users to use a specific relay or a specific set of relays. That's not to say that clients cannot select a few starter relays, but users should have complete control over adding or removing them. "),(0,o.kt)("li",{parentName:"ul"},"Opt in vs opt out. Clients should not automatically opt users into following certain topics or people. Instead, they should give users the option to follow or unfollow topics and people. "),(0,o.kt)("li",{parentName:"ul"},"When possible, allow users to skip onboarding steps if they are not totally necessary such as creating a starter topic-based feed. ")),(0,o.kt)("h3",{id:"make-use-of-interoperability"},"Make Use of Interoperability"),(0,o.kt)("p",null,"Unless your explicit goal is to build a do-it-all client, consider leaning into the modular nature of Nostr and building a smaller client that does one thing really well. This will allow you to focus on a specific use case and provide a better experience for your users. "),(0,o.kt)("p",null,"Focusing on specific use cases allows other developers to tap into existing clients and build integrations instead of recreating them from scratch. Think of nostr as a network of components that can be re-arranged in many different ways to create new experiences."),(0,o.kt)("h3",{id:"keep-it-flexible"},"Keep it Flexible"),(0,o.kt)("p",null,"Try to give users options to customize their experiences. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Allow users to change appearance settings such as light and dark mode, font sizes. "),(0,o.kt)("li",{parentName:"ul"},"Let users choose if they are right handed or left handed and adjust the UI accordingly."),(0,o.kt)("li",{parentName:"ul"},'Give people options to opt in or opt out of various types of notifications instead of grouping them under one "Notifications" toggle.'),(0,o.kt)("li",{parentName:"ul"},"Allow users to specify information density if possible. ")),(0,o.kt)("h2",{id:"design-principles"},"Design Principles"),(0,o.kt)("h3",{id:"fastest-path-to-awesome"},"Fastest Path to Awesome"),(0,o.kt)("p",null,'The fastest path to awesome is the path that gets the user to the "aha" moment as quickly as possible. This means that the user should be able to get started with the client as quickly as possible and experience the value of the client as soon as possible.'),(0,o.kt)("h3",{id:"keep-it-simple"},"Keep it Simple"),(0,o.kt)("p",null,"Simplicity wins. Keep the interface as simple and intuitive as possible. Exceptions include tools designed for power users or for dense information."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimize the number of steps to accomplish a task. "),(0,o.kt)("li",{parentName:"ul"},"Minimize cognitive load. Instead of offering every option under the sun, consider offering fewer core options and allowing the user to discover more down the road. Often, less is more."),(0,o.kt)("li",{parentName:"ul"},"Use progressive disclosure to ease the user into new concepts instead of laying it on them all at once. For example, you could guide users to understanding of relays, zaps and other concepts by slowly introducing them with tooltips or a resource center.")),(0,o.kt)("h3",{id:"make-it-fast"},"Make it Fast"),(0,o.kt)("p",null,"Even the best designed and feature-complete client in the world may be all for nothing if it's slow and nobody can use it. Performance is a feature and can make or break your client and all of the effort you've put into it. Consider the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Utilizing caching when possible"),(0,o.kt)("li",{parentName:"ul"},"Optimizing images and other media. Check to see the size of the media being loaded and if it can be optimized further. "),(0,o.kt)("li",{parentName:"ul"},"Structuring the views in such a way that prioritizes performance by loading the most important content first. "),(0,o.kt)("li",{parentName:"ul"},"Use skeleton loaders and other techniques to make the app feel fast even if it's not.")),(0,o.kt)("admonition",{title:"Resource: ",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Use PageSpeed Insights to regularly test your client for issues. ")),(0,o.kt)("h3",{id:"user-centric-design"},"User-Centric Design"),(0,o.kt)("p",null,"Focus on the needs and experiences of the user throughout the design process. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add feedback collection mechanisms to your client that allow you to collect feedback from your users. "),(0,o.kt)("li",{parentName:"ul"},"Consider adding a simple form besides a typical link to the GitHub issue submission page. "),(0,o.kt)("li",{parentName:"ul"},"Build in open and ask for feedback early and often."),(0,o.kt)("li",{parentName:"ul"},"Treat complaints as great opportunities to improve your client. Do not minimize the user's experience or feelings. Never lash out at users for providing feedback, even if it's not constructive."),(0,o.kt)("li",{parentName:"ul"},"Try not to get attached to your own work. The preferences of many should supersede your own. Stay flexible and update the UI based on user feedback.")),(0,o.kt)("h3",{id:"make-your-most-important-asks-prominent"},"Make Your Most Important Asks Prominent"),(0,o.kt)("p",null,"Consider what each page or view should help the user accomplish. What is the most important action you want the user to take? Make that action prominent and easy to find. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use color and visual hierarchy to make the most important actions stand out. For example, if you have a long-form client and the point is to share content, make the share buttons easy to find and prominent."),(0,o.kt)("li",{parentName:"ul"},"De-emphasize secondary actions via visual design. "),(0,o.kt)("li",{parentName:"ul"},"If it's hidden, it doesn't exist. Make sure the user can easily find the most important actions. If they are hidden under menus, consider ways to bring them out into the open.")),(0,o.kt)("h3",{id:"avoid-jargon"},"Avoid Jargon"),(0,o.kt)("p",null,'Avoid using jargon or technical terms when possible. Instead, use simple and clear language that is easy to understand. Nostr has a lot of technical terms and concepts that may be difficult to understand for new users. Consider how you can explain these concepts in a simple and clear way. For example, equate private keys to passwords, relays to servers, NIP-05 handles to "nostr addresses"  and zaps to payments. Use descriptors to explain what things are and how they work.'),(0,o.kt)("h3",{id:"provide-feedback"},"Provide Feedback"),(0,o.kt)("p",null,"Provide feedback to the user when they take an action. This can be done in many ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use a loading indicator to show that something is happening"),(0,o.kt)("li",{parentName:"ul"},"Use a success message to show that the action was successful"),(0,o.kt)("li",{parentName:"ul"},"Use toast notifications to indicate something has happened"),(0,o.kt)("li",{parentName:"ul"},"Use clear error messages to indicate that something went wrong"),(0,o.kt)("li",{parentName:"ul"},"Use tooltips to explain what things are and how they work"),(0,o.kt)("li",{parentName:"ul"},"Add hover states to buttons and other elements to indicate that they are clickable"),(0,o.kt)("li",{parentName:"ul"},"Use animations to indicate that something has happened"),(0,o.kt)("li",{parentName:"ul"},"Use color to indicate that something has happened"),(0,o.kt)("li",{parentName:"ul"},"Add micro-interactions to make the app feel alive and responsive"),(0,o.kt)("li",{parentName:"ul"},"Occasionally use sound effects to indicate that something has happened. Don't over do it - stick to simple sounds and only when appropriate. For example, pull to refresh could have a sound effect."),(0,o.kt)("li",{parentName:"ul"},"Make use of ",(0,o.kt)("a",{parentName:"li",href:"https://blog.prototypr.io/skeleton-loader-an-overview-purpose-usage-and-design-173b5340d0e1"},"skeleton loaders")," to indicate that something is loading")),(0,o.kt)("h3",{id:"maintain-consistency"},"Maintain Consistency"),(0,o.kt)("p",null,"Maintain a uniform design throughout your client. This means that the user should be able to easily recognize the same elements across different views. For example, if you use a certain color for buttons, use the same color for buttons across the entire client. If you use a certain font for headings, use the same font for headings across the entire client. Create components that follow a design system and apply the same hierarchy, spacing, color usage and other design elements across the entire client."),(0,o.kt)("h3",{id:"stick-to-known-patterns-when-possible"},"Stick to Known Patterns When Possible"),(0,o.kt)("p",null,"You won't always be able to stick to known patterns, but when possible try not to reinvent the wheel by creating an interface that has no reference anywhere else. This will make it difficult for users to understand how to use your client. For example, if you're creating a mobile app, consider using the native navigation patterns and other native elements. "),(0,o.kt)("h3",{id:"make-it-accessible"},"Make it Accessible"),(0,o.kt)("p",null,"Design for all users, including those with disabilities. "),(0,o.kt)("admonition",{title:"Resource: ",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"See the ",(0,o.kt)("a",{parentName:"p",href:"https://nostrdesign.org/docs/resources/"},"resources page")," for a list of accessibility tools and resources.")),(0,o.kt)("p",null,"Consider the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use color contrast tools to ensure that your colors are accessible. WCAG AA is the minimum standard that designers should aim for."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("a",{parentName:"li",href:"https://accessible-colors.com/"},"accessible colors")," to ensure that your text is accessible"),(0,o.kt)("li",{parentName:"ul"},"Opt for UI-friendly fonts that are easy to read. Avoid using decorative fonts for body text."),(0,o.kt)("li",{parentName:"ul"},"Consider things like touch targets - making buttons large enough to be easily tapped on mobile devices. Check that your links are spaced sufficiently to avoid accidental miss-clicking. Ensure that you have sufficient spacing to the edges of the screen to make for easier tapping of links. "),(0,o.kt)("li",{parentName:"ul"},"Use alt tags for images and other media to describe the content."),(0,o.kt)("li",{parentName:"ul"},"Use semantic HTML to ensure that your content is accessible to screen readers and other assistive technologies."),(0,o.kt)("li",{parentName:"ul"},"Keep your labels clear and simple. Avoid using jargon or technical terms."),(0,o.kt)("li",{parentName:"ul"},"Provide a way to skip to the main content for screen readers."),(0,o.kt)("li",{parentName:"ul"},"Consider keyboard shortcuts ")),(0,o.kt)("h3",{id:"minimize-errors"},"Minimize Errors"),(0,o.kt)("p",null,"Users are bound to make errors. Anticipate what errors they may come across and offer ways to correct them. Showing too many error notices when user is doing what is asked of them may turn them away from your client. "),(0,o.kt)("p",null,"For example, displaying an error when a person fails to upload an image in onboarding can be mitigated by not making the profile image a required field. Instead, you could use a placeholder image and allow the user to upload one later."))}p.isMDXComponent=!0},5151:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/guiding-principles-c887eaf601b0a722d2fdddd3cc0ee1dc.png"}}]);