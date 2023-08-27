import{_ as e,o as t,c as a,S as s}from"./chunks/framework.8fda3224.js";const m=JSON.parse('{"title":"Deye/Sunsynk Inverters","description":"","frontmatter":{},"headers":[],"relativePath":"guide/overview.md","filePath":"guide/overview.md","lastUpdated":1693115048000}'),r={name:"guide/overview.md"},n=s('<h1 id="deye-sunsynk-inverters" tabindex="-1">Deye/Sunsynk Inverters <a class="header-anchor" href="#deye-sunsynk-inverters" aria-label="Permalink to &quot;Deye/Sunsynk Inverters&quot;">​</a></h1><p>This project enables access to Deye Hybrid Inverters &amp; Deye branded inverters like Sunsynk through a Python 3 library. It also provides an Add-On that can be installed in the Home Assistant OS.</p><p>This code was developed on a <a href="https://www.sunsynk.org/" target="_blank" rel="noreferrer">Sunsynk</a> 5.5 kWh inverter.</p><div class="warning custom-block"><p class="custom-block-title">Disclaimer</p><p>DISCLAIMER: Use at your own risk! Especially when writing any settings.</p></div><h2 id="home-assistant-sunsynk-add-on" tabindex="-1">Home Assistant Sunsynk Add-On <a class="header-anchor" href="#home-assistant-sunsynk-add-on" aria-label="Permalink to &quot;Home Assistant Sunsynk Add-On&quot;">​</a></h2><p>An add-on to receive Sunsynk Inverter Values and push them to Home Assistant through MQTT.</p><p>It supports Home Assistant auto-discovery for the sensors and flexible scheduling when to read and when to report.</p><p><img src="https://github.com/kellerza/sunsynk/raw/main/images/energy.png" alt="HASS Energy management"></p><p>For the Add-On you require Home Assistant OS and a RS-485 adaptor to connect to your Sunsynk inverter. Sensors are read using the Modbus protocol and sent to a MQTT server.</p><h2 id="alternatives" tabindex="-1">Alternatives <a class="header-anchor" href="#alternatives" aria-label="Permalink to &quot;Alternatives&quot;">​</a></h2><p>There are several alternative ways to access your inverter data. These include:</p><ul><li>ESP32</li><li>Node-RED</li><li>Solar Assistant (a commercial application)</li></ul><p>I have posted <a href="https://powerforum.co.za/topic/16136-home-assistant-inverter-integration-options/?do=findComment&amp;comment=146782" target="_blank" rel="noreferrer">why</a> I believe this addon is the easiest and most flexible way to do this:</p><ul><li>Reconfigure your inverter settings with the Home Assistant UI (dropdowns &amp; sliders) or automations</li><li>Automatic updates in HASS &amp; maintained by a couple of community members</li><li>Data filters to reduce the number of updates &amp; writes to low-cost SD cards, but still have 1 or 2 second automation response to big changes in load <strong>Now based on schedules</strong></li><li>Various options to connect to the inverter wireless or wired (preferred, since it updates every second)</li></ul><p>While a wired setup is more work, the addon reads several sensors each second and personally I would rather do this over a wired gateway/cable.</p><h2 id="sunsynk-python-library" tabindex="-1">Sunsynk Python Library <a class="header-anchor" href="#sunsynk-python-library" aria-label="Permalink to &quot;Sunsynk Python Library&quot;">​</a></h2><p><a href="https://pypi.org/project/sunsynk/" target="_blank" rel="noreferrer"><img src="https://badge.fury.io/py/sunsynk.svg" alt="PyPI version"></a><a href="https://codecov.io/gh/kellerza/sunsynk" target="_blank" rel="noreferrer"><img src="https://codecov.io/gh/kellerza/sunsynk/branch/main/graph/badge.svg?token=ILKRC5UTXI" alt="codecov"></a></p><p>This addon uses the Python sunsynk library. The Python library is available through pip: <code>pip install sunsynk</code></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Please note that the addon is an example of how the library can be used and no support can be given for your own Python applications.</p></div><h2 id="credits" tabindex="-1">Credits <a class="header-anchor" href="#credits" aria-label="Permalink to &quot;Credits&quot;">​</a></h2><ul><li>Powerforum users Bloubul7, @jacauc and Sc00bs. See <a href="https://powerforum.co.za/topic/8646-my-sunsynk-8kw-data-collection-setup/" target="_blank" rel="noreferrer">this thread</a>.</li><li>@Ivan-L for adding the writable sensors.</li><li>@kababook &amp; @archi for the 3-phase definitions.</li><li>Other <a href="https://github.com/kellerza/sunsynk/graphs/contributors" target="_blank" rel="noreferrer">contributors</a></li></ul>',21),o=[n];function i(l,d,h,c,p,u){return t(),a("div",null,o)}const b=e(r,[["render",i]]);export{m as __pageData,b as default};
