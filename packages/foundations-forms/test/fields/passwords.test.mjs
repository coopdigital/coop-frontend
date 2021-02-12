/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import {
  mask,
  unmask,
  toggleMaskUnmask,
  toggleAllMaskUnmask,
} from '../../src/fields/passwords.mjs';

const { readFile } = fs.promises;

describe('Form elements', () => {
  describe('Passwords', () => {
    let passwords;
    let password;

    beforeEach(async () => {
      document.body.innerHTML = await readFile('./packages/foundations-forms/test/fixtures/passwords.html');
      passwords = document.querySelectorAll('[type=password]');
      password = document.getElementById('password');
    });

    describe('Show', () => {
      test('Password field can be unmasked', () => {
        unmask(password);
        expect(password.type).toEqual('text');
      });
    });

    describe('Show (via toggle)', () => {
      test('Password field is toggled visible', () => {
        toggleMaskUnmask(password);
        expect(password.type).toEqual('text');
      });

      test('Password field is toggled visible, and back', () => {
        toggleMaskUnmask(password);
        toggleMaskUnmask(password);
        expect(password.type).toEqual('password');
      });

      test('Multiple fields (Array) are toggled visible', () => {
        toggleAllMaskUnmask(Array.from(passwords));
        expect(passwords[0].type).toEqual('text');
        expect(passwords[1].type).toEqual('text');
      });

      test('Multiple fields (Array) are toggled visible, and back', () => {
        toggleAllMaskUnmask(Array.from(passwords));
        toggleAllMaskUnmask(Array.from(passwords));
        expect(passwords[0].type).toEqual('password');
        expect(passwords[1].type).toEqual('password');
      });

      test('Multiple fields (NodeList) are toggled visible', () => {
        toggleAllMaskUnmask(passwords);
        expect(passwords[0].type).toEqual('text');
        expect(passwords[1].type).toEqual('text');
      });

      test('Multiple fields (NodeList) are toggled visible, and back', () => {
        toggleAllMaskUnmask(passwords);
        toggleAllMaskUnmask(passwords);
        expect(passwords[0].type).toEqual('password');
        expect(passwords[1].type).toEqual('password');
      });
    });

    describe('Hide', () => {
      beforeEach(() => {
        passwords[0].type = 'text';
        passwords[1].type = 'text';
      });

      test('Password field can be masked', () => {
        mask(password);
        expect(password.type).toEqual('password');
      });
    });

    describe('Hide (via toggle)', () => {
      beforeEach(() => {
        passwords[0].type = 'text';
        passwords[1].type = 'text';
      });

      test('Password field is toggled hidden', () => {
        toggleMaskUnmask(password);
        expect(password.type).toEqual('password');
      });

      test('Password field is toggled hidden, and back', () => {
        toggleMaskUnmask(password);
        toggleMaskUnmask(password);
        expect(password.type).toEqual('text');
      });

      test('Multiple fields (Array) are toggled hidden', () => {
        toggleAllMaskUnmask(Array.from(passwords));
        expect(passwords[0].type).toEqual('password');
        expect(passwords[1].type).toEqual('password');
      });

      test('Multiple fields (Array) are toggled hidden, and back', () => {
        toggleAllMaskUnmask(Array.from(passwords));
        toggleAllMaskUnmask(Array.from(passwords));
        expect(passwords[0].type).toEqual('text');
        expect(passwords[1].type).toEqual('text');
      });

      test('Multiple fields (NodeList) are toggled hidden', () => {
        toggleAllMaskUnmask(passwords);
        expect(passwords[0].type).toEqual('password');
        expect(passwords[1].type).toEqual('password');
      });

      test('Multiple fields (NodeList) are toggled hidden, and back', () => {
        toggleAllMaskUnmask(passwords);
        toggleAllMaskUnmask(passwords);
        expect(passwords[0].type).toEqual('text');
        expect(passwords[1].type).toEqual('text');
      });
    });
  });
});
