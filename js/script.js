let yearOfBirth = prompt('Вкажiть ваш рiк народження у форматi ДД-ММ-РРРР');
	const todayYear = 2022;

	if (!(yearOfBirth.includes('-'))) {
		alert ('Невірний формат! Повинно бути 2 розділювача у вигляді тире ДД-ММ-РРРР') 
			}// срабатывает если ничего не вводить

			else if(yearOfBirthComponents = date.split('-')) {
				alert ('Невірний формат! Повинно бути ДД-ММ-РРРР')
			}
			else if((yearOfBirthComponents.length !== 3)) {
					alert ('Невірний формат! Повинно бути 3 элемента ДД-ММ-РРРР')
				}
				else if (yearOfBirthComponents[0].length !==2 || Number.isNaN(yearOfBirthComponents[0] )) {
					alert ('Ви невірно ввели ДЕНЬ')
					}
				else if (yearOfBirthComponents[1].length !==2 || Number.isNaN(yearOfBirthComponents[1] )) {
					alert ('Ви невірно ввели МІСЯЦЬ')
					}
				else if (yearOfBirthComponents[2].length !==4 || Number.isNaN(yearOfBirthComponents[2] )) {
					alert ('Ви невірно ввели РІК')
					}
				else {
					const day = Number(yearOfBirthComponents[0])
					const month = Number(yearOfBirthComponents[1])
					var year = Number(yearOfBirthComponents[2])

					if (1940 > year || year > 2010){
						alert ('Ви невірно ввели РІК. Діапазон з 1940 по 2010')
							}
					else if ( month < 1 || month > 12){
						alert ('Невірна дата: Ви невірно ввели МІСЯЦЬ')
							}
					else if ( day < 1 || day > 31) {
						alert ('Невірна дата: Ви невірно ввели ДЕНЬ')
							}
				    else if (month === 2 && day > 29) {
						alert ('Невірна дата: У лютому не може бути більше 29 днів')
							}
					else if (month === 2 && day === 29 && !leapYear(year)) {
						alert ('Невірна дата: Цей рік не високосний') 
							}	
					else if(day === 31 && (month === 4 || month === 6 || month === 9 || month === 11)) {
						alert ('Невірна дата: В цьому місяці немає 31 дня') 
							}
				}
	if (yearOfBirth === null || yearOfBirth.trim() === '') {
			alert ('Шкода, що Ви не захотіли ввести свій(ю) рiк народження')
			}	
			
			
	const currentCity = prompt('Вкажiть ваше мiсто проживання');
			switch (true) {
			case currentCity === 'Київ':
				alert ('Ви живете у столиці Украіни!')
				break;
			case currentCity === 'Вашингтон':
				alert ('Ви живете у столиці Сполучених Штатів Америки!')
				break;
			case currentCity === 'Лондон':
				alert ('Ви живете у столиці Англії!')
				break;
			case (/[0-9]/.test(currentCity)):
        			alert ('Ви ввели цифри :(')
        			break;
			case (currentCity === null):
				alert ('Шкода, що Ви не захотіли ввести ваше мiсто проживання')
				break;
			case (currentCity.trim() === ''):
        			alert ('Ви нічого не ввели :(')
        			break;
			default:
				alert (`Чудово! Ви живете у місті ${currentCity}!\nЗараз ми створимо міні-анкету, якщо ви вірно все ввели`)
				break;
			}

			switch (true) {
				case yearOfBirth === null:
				case (1940 < year || year < 2010):
				case isNaN(currentCity) :
				case currentCity !== null :
				case (!(/[0-9]/.test(currentCity))): 
                case (currentCity.trim() === ''):
				case (yearOfBirth === ''):
					alert (`Міні-Анкета:\nТвій вік: ${todayYear - year} років! \nТи живеш у місті  ${currentCity}.`)
                    break;
				default :
					alert('Щось пішло не так. Спробуй потім ще раз :(');
                    break;
			}
	

	const favoriteSport = prompt('Вкажiть ваш улюбленний вид спорту');
			switch (true) {
			case favoriteSport === 'Баскетбол':
				let = confirm (`Круто! Хочеш стати профі як Леброн Джеймс?`)
					if (true) {
  						alert('Успіхів тобі!')
							} 
						else {
  						alert('Упс! Не вгадав :(')
						}
				break;
			case favoriteSport === 'Футбол':
				confirm (`Круто! Хочеш стати профі як Лионель Месси?`)
					if (true) {
  						alert('Успіхів тобі!')
							} 
						else {
  						alert('Упс! Не вгадав :(')
						}
				break;
			case favoriteSport === 'Бокс':
				confirm (`Круто! Хочеш стати профі як Василій Ломаченко?`)
					if (true) {
  						alert('Успіхів тобі!')
							} 
						else {
  						alert('Упс! Не вгадав :(')
						}
				break;
			case (favoriteSport === null):
				alert ('Шкода, що Ви не захотіли ввести свій улюбленний вид спорту :(')
				break;
			case (favoriteSport.trim() === ''):
        			alert ('Шкода, що Ви не захотіли ввести свій улюбленний вид спорту :(')
        			break;
			case ((/[0-9]/.test(favoriteSport))):
        			alert ('Ти ввів цифри :(')
        			break;
			default:
				alert (`Дуже круто, що твій улюблений спорт ${favoriteSport}!`)
				break;
			}
