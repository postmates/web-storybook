import { configure } from '@kadira/storybook';

function loadStories() {
    // Load stories here!
    require('../stories/index.js');
}

configure(loadStories, module);