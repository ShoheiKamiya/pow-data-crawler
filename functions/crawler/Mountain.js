import { formatDate, snowfallBlock } from './utils.js';

export class Mountain {
  constructor(snowfallStr, depthStr, temperatureStr, updatedStr) {
    this.snowfallStr = snowfallStr;
    this.depthStr = depthStr;
    this.temperatureStr = temperatureStr;
    this.updatedStr = updatedStr;
  }

  static formatDate(date) {
    return formatDate(date);
  }

  formatDate(date) {
    return formatDate(date);
  }

  get bubble() {
    return {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: this.constructor.PREFECTURE,
            weight: 'bold',
            color: '#74B9FF',
            size: 'sm',
          },
          {
            type: 'text',
            text: this.constructor.NAME,
            weight: 'bold',
            size: 'xl',
            margin: 'md',
          },
          {
            type: 'text',
            text: `更新日: ${this.updated}`,
            size: 'xs',
            color: '#aaaaaa',
            wrap: true,
            align: 'end',
            margin: 'xs',
          },
          {
            type: 'separator',
            margin: 'xxl',
          },
          {
            type: 'box',
            layout: 'vertical',
            margin: 'xxl',
            spacing: 'sm',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: '降雪量',
                    size: 'sm',
                    color: '#555555',
                    flex: 0,
                  },
                  snowfallBlock(this.snowfall),
                ],
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: '積雪量',
                    size: 'sm',
                    color: '#555555',
                    flex: 0,
                  },
                  {
                    type: 'text',
                    text: `${this.depth} cm`,
                    size: 'sm',
                    color: '#111111',
                    align: 'end',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: '気温',
                    size: 'sm',
                    color: '#555555',
                    flex: 0,
                  },
                  {
                    type: 'text',
                    text: `${this.temperature} ℃`,
                    size: 'sm',
                    color: '#111111',
                    align: 'end',
                  },
                ],
              },
            ],
          },
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            action: {
              type: 'uri',
              label: '公式サイトへ',
              uri: this.constructor.URL,
            },
            height: 'sm',
            gravity: 'top',
          },
        ],
        action: {
          type: 'uri',
          label: 'action',
          uri: this.constructor.URL,
        },
      },
      styles: {
        footer: {
          separator: true,
        },
      },
    };
  }
}
