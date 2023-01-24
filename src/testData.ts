 import controlButtons from './store/controlButtons'
 import controlAutocomplit from './store/controlAutocomplit'

// Массивы данных для тестирование.
// В массив можно передавать любое количество кнопок в виде обьекта. 
// Для кнопок есть возможность настроить текст и колбэк функцию.
// Первый массив для кнопок слева. Второй массив для кнопок справа.
 
 // Пример 1. С двумя кнопками справа
const testRightButtons = new controlButtons(
    [], // Пустой массив для кнопок слева
    [ // Массив с кнопками справа
      {
        id: 1,
        text: 'Очистить',
        callback: () => {
          testRightButtons.text = ''
        }
      },
       {
        id: 2,
        text: 'Вставить текст',
        callback: () => {
          testRightButtons.setText('Hello world!')
        }
      },
    ]
  )

    // Пример 2. C одной кнопкой слева и одной кнопкой справа
 const testRightAndLeftButtons = new controlButtons(
      [ // Массив с кнопками слева
         {
          id: 1,
          text: 'Проверка на число',
          callback: () => {
            if(Number(testRightAndLeftButtons.text)){
              alert(testRightAndLeftButtons.text)
            }
          }
         },
      ],
      [ // Массив с кнопками справа
         {
          id: 2,
          text: 'Вызов alert',
          callback: () => {
            alert(testRightAndLeftButtons.text)
          }
        },
      ]
 )

// Пример 3. Контрол автокомплит с 3 подсказками
 const testAutocomplitThreeTips = new controlAutocomplit(3)
// Пример 4. Контрол автокомплит с 10 подсказками
 const testAutocomplitTenTips = new controlAutocomplit(10) 



 export {testRightButtons, testRightAndLeftButtons, testAutocomplitThreeTips, testAutocomplitTenTips}