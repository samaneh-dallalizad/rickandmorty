import { expect, it, describe } from 'vitest'
import Vue from 'vue';
import {mount} from '@vue/test-utils'
import CharacterListComponent from './characterList.vue';
import {store} from '../../store';
import {fetch} from 'whatwg-fetch'

describe('HomepageComponent', () => {

    it('CharacterList without data must always be the same', async () => {
        const wrapper = mount(CharacterListComponent, {
            global: {
                provide: {
                    store
                },
                fetch
            }
        })
        expect(wrapper.element).toMatchSnapshot()
    })

    it('CharacterList with data must always be the same', async () => {
        await store.dispatch('getCharacters')
        const wrapper = mount(CharacterListComponent, {
            global: {
                provide: {
                    store
                },
                fetch
            }
        })
        expect(wrapper.element).toMatchSnapshot()
    })
})