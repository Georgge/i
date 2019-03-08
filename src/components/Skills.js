import React from 'react';
import { skills } from '../hard/skills.json';


export const Skills = () => (
  <div className="screen  skills">
    <div className="subtitle">
      <h2 className="subtitle-text">Skills</h2>
      <div className="subtitle-dots" />
    </div>
    {
      skills.map((skill) => {
        return (
          <div className="skill-item">
            <div className="skill-item-container">
              <i className={skill.icon} />
              <div className="skill-item-info">
                <div>{ skill.title }</div>
                <div className="puntuation">
                  {
                    [1, 2, 3, 4, 5].map((i) => {
                      if (i < skill.ptn || i === skill.ptn) {
                        return (
                          <div className="puntuation-circle  ptn-true">
                            <span />
                            <span />
                          </div>
                        );
                      } else if ((skill.ptn - Math.floor(skill.ptn)) !== 0) {
                        skill.ptn = 0;
                        return (
                          <div className="puntuation-circle  ptn-true">
                            <span />
                            <span className="half" />
                          </div>
                        );
                      }

                      return (
                        <div className="puntuation-circle">
                          <span />
                          <span />
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
            <span className="skill-item-dots2" />
          </div>
        );
      })
    }
    <div className="close">
      <h2 className="close-tag">/</h2>
      <span className="subtitle-dots" />
    </div>
  </div>
);
