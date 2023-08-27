# be-memed [TODO]

Cache templates contained within templates.

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

be-memed helps make that process declarative.

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
import {contentLookup} from 'be-memed/be-memed.js';
const content = contentLookup.get('a32123');
```




