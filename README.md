# be-memed

Cache templates contained within templates.

<!-- [![Playwright Tests](https://github.com/bahrus/be-committed/actions/workflows/CI.yml/badge.svg?branch=baseline)](https://github.com/bahrus/be-committed/actions/workflows/CI.yml) -->
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-memed?style=for-the-badge)](https://bundlephobia.com/result?p=be-memed)
<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-memed?compression=gzip">
[![NPM version](https://badge.fury.io/js/be-memed.png)](http://badge.fury.io/js/be-memed)

Sometimes we have a template inside a template:

```html
<template id=outer>
    <template id=inner>
        ...
    </template>
</template>
```

Some preliminary analysis on my part shows that it is faster to:

1.  Extract out the inner template
2.  Clone the outer template (without the inner template).
3.  Clone the extracted inner template

than it is to:

1.  Clone the outer template (with the inner template).
2.  Clone the inner template from the cloned outer template.

be-memed helps make that process declarative, via a [be-enhanced](https://github.com/bahrus/be-enhanced) [custom enhancement](https://github.com/WICG/webcomponents/issues/1000).

```html
<template id=outer be-memed>
    <template id=inner>
        ...
    </template>
</template>
```

generates:

```html
<template id=outer be-memed>
    <template id=inner be-memed-id="a32123"></template>
</template>
```  

The contents of the original inner template can be obtained from:

```JavaScript
import {getContent} from 'be-memed/be-memed.js';
const content = getContent('a32123');
```


## Running locally

Any web server that can serve static files will do, but...

1.  Install git.
2.  Do a git clone or a git fork of repository https://github.com/bahrus/be-memed
3.  Install node.js
4.  Open command window to folder where you cloned this repo.
5.  > npm install
6.  > npm run serve
7.  Open http://localhost:3030/demo/dev in a modern browser.

## Using from ESM Module:

```JavaScript
import 'be-memed/be-memed.js';
```

## Using from CDN:

```html
<script type=module crossorigin=anonymous>
    import 'https://esm.run/be-memed';
</script>
```





