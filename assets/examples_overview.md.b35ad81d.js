import{_ as e,o as a,c as s,S as o}from"./chunks/framework.8fda3224.js";const f=JSON.parse('{"title":"Home Assistant Examples","description":"","frontmatter":{},"headers":[],"relativePath":"examples/overview.md","filePath":"examples/overview.md","lastUpdated":1693115048000}'),t={name:"examples/overview.md"},n=o(`<h1 id="home-assistant-examples" tabindex="-1">Home Assistant Examples <a class="header-anchor" href="#home-assistant-examples" aria-label="Permalink to &quot;Home Assistant Examples&quot;">​</a></h1><p>There are three categories of Home Assistant Examples:</p><ul><li><p>Lovelace cards</p></li><li><p>Automations</p></li><li><p>Templates</p><p>Templates can be used to create template sensors and are the building blocks for UI elements</p></li></ul><h2 id="config-packages" tabindex="-1">Config packages <a class="header-anchor" href="#config-packages" aria-label="Permalink to &quot;Config packages&quot;">​</a></h2><p>Config packages in Home Assistant allows you to bundle different component&#39;s configuration together. The examples on this site assumes that you have a package folder, referred to as <code>/config/packages/</code>, where you add the example yaml package files.</p><p>Read up on Packages and specifically how to <a href="https://www.home-assistant.io/docs/configuration/packages/#create-a-packages-folder" target="_blank" rel="noreferrer">Create a packages folder</a></p><p>The short version: This config snippet will load packages from <code>/config/packages/</code>. If this is not clear, read the HA docs again.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">homeassistant</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">packages</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">!include_dir_named</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">packages</span></span></code></pre></div>`,8),l=[n];function p(c,i,r,d,m,h){return a(),s("div",null,l)}const _=e(t,[["render",p]]);export{f as __pageData,_ as default};
