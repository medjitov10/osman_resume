import React, {Component} from 'react';
import SkillsLanguageItem from './skills-language-item';

export default class SkillsLanguage extends Component {
  render() {
    return (
      <div >

          <SkillsLanguageItem color='#ff5151' percent={50} name="English"/>
          <SkillsLanguageItem color='#2193f6' percent={79} name="Russian"/>
          <SkillsLanguageItem color='#d9df97' percent={65} name="Ukrainian" />

      </div>
    );
  }
}
