import{_ as e,c as t,o as r,Q as o}from"./chunks/framework.7f5240a6.js";const _=JSON.parse('{"title":"Sensor modifiers","description":"","frontmatter":{},"headers":[],"relativePath":"reference/sensor-modifiers.md","lastUpdated":1689771178000}'),a={name:"reference/sensor-modifiers.md"},s=o('<h1 id="sensor-modifiers" tabindex="-1">Sensor modifiers <a class="header-anchor" href="#sensor-modifiers" aria-label="Permalink to &quot;Sensor modifiers&quot;">​</a></h1><h2 id="sensor-modifiers-min-max-now-average-step" tabindex="-1">Sensor modifiers - Min/Max/Now/Average/Step <a class="header-anchor" href="#sensor-modifiers-min-max-now-average-step" aria-label="Permalink to &quot;Sensor modifiers - Min/Max/Now/Average/Step&quot;">​</a></h2><p>Sensors fields can be modified by adding a modifier to the end of the field name. Without any modifier, a <a href="https://github.com/kellerza/sunsynk/blob/main/hass-addon-sunsynk/filter.py#L192" target="_blank" rel="noreferrer">default modifier</a> will be added based on the field name.</p><table><thead><tr><th>Modifier</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td><code>:avg</code></td><td style="text-align:left;">the average over the last 60 seconds.</td></tr><tr><td><code>:max</code></td><td style="text-align:left;">the maximum value over the last 60 seconds. Ideal for <em>counters</em> where you are typically interested only in the last value.</td></tr><tr><td><code>:min</code></td><td style="text-align:left;">the minimum value over the last 60 seconds.</td></tr><tr><td><code>:now</code></td><td style="text-align:left;">the maximum value over the last 2 seconds. Useful to see current sensor value.</td></tr><tr><td><code>:round_robin</code></td><td style="text-align:left;">cycle over all configured settings. Ideal for config settings.</td></tr><tr><td><code>:step</code></td><td style="text-align:left;">the average over the last minute will be reported, except if there is a significant change (&gt;50) then it will be reported immediately. This is useful for automations using the current power.</td></tr></tbody></table>',4),i=[s];function d(n,l,c,f,m,h){return r(),t("div",null,i)}const p=e(a,[["render",d]]);export{_ as __pageData,p as default};
