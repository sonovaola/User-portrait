const yearOfBirth = prompt('Вкажiть ваш рiк народження у форматi РРРР');
const todayYear = 2022;
	switch (true) {
		case (yearOfBirth === null):
		alert ('Шкода, що Ви скасували та не захотіли ввести ваш рiк народження')
			break;
		case (yearOfBirth.trim() === ''):
		alert ('Шкода, що Ви не ввели ваш рiк народження')
			break;
		case (!(/[0-9]/.test(yearOfBirth))):
			alert ('Ви ввели цифри')
			break;
		case (1940 > yearOfBirth || yearOfBirth > 2010):
			alert ('Помилка: Ви ввели рік не в діапазоні 1940-2010')
			break;
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
        			alert ('Ви ввели цифри ')
        			break;
			case (currentCity === null):
				alert ('Шкода, що Ви не захотіли ввести ваше мiсто проживання')
				break;
			case (currentCity.trim() === ''):
        			alert ('Ви нічого не ввели')
        			break;
			}
	const userYear = todayYear - yearOfBirth;
	if (1940 < yearOfBirth && yearOfBirth < 2010
		&& currentCity !== null
		&& currentCity.trim() !== ''
		&&(!(/[0-9]/.test(currentCity)))) {
			alert (`Тобi ${userYear} рокiв. Твое мicто проживання: ${currentCity}`)
		}

		else if (1940 < yearOfBirth && yearOfBirth < 2010) {
			alert (`Вам ${userYear} рокiв. \nАле Ви не ввели свое місто проживання:(`)
		}

		else if (currentCity !== null && currentCity.trim() !== '') {
			alert (`Ви не ввели свій рік народження, тому ми не можемо порахувати скільки вам років. \nТвое мicто проживання: ${currentCity}`)
		}

		else { 
			alert (`Помилка! Ти ввів данні невірно`)
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
