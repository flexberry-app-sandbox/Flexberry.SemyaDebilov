export default {
  projections: {
    КолонкаE: {
      номер: {
        __caption__: 'Номер'
      },
      состояние: {
        __caption__: 'Состояние'
      },
      состав: {
        __caption__: 'Состав',
        пистолет: {
          __caption__: 'Пистолет',
          номер: {
            __caption__: 'Номер'
          },
          топливо: {
            __caption__: '',
            типТоплива: {
              __caption__: 'Тип топлива'
            },
            справочникЦен: {
              __caption__: '',
              цена: {
                __caption__: 'Цена'
              }
            }
          }
        }
      }
    },
    КолонкаL: {
      номер: {
        __caption__: 'Номер'
      },
      состояние: {
        __caption__: 'Состояние'
      }
    }
  },
  validations: {
    номер: {
      __caption__: 'Номер'
    },
    состояние: {
      __caption__: 'Состояние'
    },
    состав: {
      __caption__: 'Состав'
    }
  }
};
