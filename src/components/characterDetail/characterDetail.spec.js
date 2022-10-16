import { expect, it, describe } from 'vitest'
import Vue from 'vue';
import {mount} from '@vue/test-utils'
import CharacterDetailComponent from './characterDetail.vue';
import {store} from '../../store';
import {fetch} from 'whatwg-fetch'

describe('HomepageComponent', () => {
    it('CharacterList must always be the same', async () => {
        await store.dispatch('getCharacters')
        const wrapper = mount(CharacterDetailComponent, {
            propsData: {
                character: store.state.characters[0],
                active: true
            },
        })
        expect(wrapper.element).toMatchSnapshot()
    })
})