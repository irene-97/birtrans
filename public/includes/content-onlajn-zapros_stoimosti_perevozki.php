<ul class="breadcrumbs">
    <li class="item">
        <a href="/" title="Главная">
            Главная
        </a>
    </li>
    <li class="item">
        <a href="onlajn-zapros_stoimosti_perevozki.php" title="Онлайн запрос стоимости перевозки">
            Онлайн запрос стоимости перевозки
        </a>
    </li>
</ul>
<h1>Онлайн запрос стоимости перевозки</h1>
<div class="block-form">
    <p>Заполните необходимые поля в приведенной ниже форме и нажмите кнопку "Отправить запрос". </p>
    <form action="#">
        <table cellspacing="1" cellpadding="1" border="0" class="form" style="border-collapse: collapse;">
            <tbody>
            <tr>
                <td align="right" valign="">Контактное лицо<font color="red"><span
                            class="form-required starrequired">*</span></font></td>
                <td><input type="text" class="inputtext" name="form_text_29" value="" size="0"></td>
            </tr>

            <tr>
                <td align="right">E-mail<font color="red"><span class="form-required starrequired">*</span></font></td>
                <td><input type="text" class="inputtext" name="form_email_30" value="" size="0"></td>
            </tr>

            <tr>
                <td align="right">Телефон<font color="red"><span class="form-required starrequired">*</span></font></td>
                <td><input type="text" class="inputtext" name="form_text_31" value="" size="0"></td>
            </tr>

            <tr>
                <td align="right">Есть договор с нашей компанией</td>
                <td><input type="checkbox" id="form_checkbox_DOGOVOR_32" name="form_checkbox_DOGOVOR[]"
                           value="32"><label for="form_checkbox_DOGOVOR_32"><span class="">&nbsp;Есть</span></label>
                </td>
            </tr>

            <tr>
                <td align="right">Перевозка</td>
                <td><select class="inputselect" name="form_dropdown_PEREVOZKA" id="form_dropdown_PEREVOZKA">
                        <option value="33">Железнодорожная</option>
                        <option value="34">Автомобильная</option>
                    </select></td>
            </tr>

            <tr>
                <td align="right">Наименование груза</td>
                <td><input type="text" class="inputtext" name="form_text_35" value="" size="0"></td>
            </tr>

            <tr>
                <td align="right">Вес груза (т)</td>
                <td><input type="text" class="inputtext" name="form_text_36" value="" size="0"></td>
            </tr>

            <tr>
                <td align="right">Габариты груза</td>
                <td><input type="text" class="inputtext" name="form_text_37" value="" size="0"></td>
            </tr>

            <tr>
                <td align="right">Длина, мм</td>
                <td><input type="text" class="inputtext" name="form_text_38" value="" size="0"></td>
            </tr>

            <tr>
                <td align="right">Ширина, мм</td>
                <td><input type="text" class="inputtext" name="form_text_39" value="" size="0"></td>
            </tr>

            <tr>
                <td align="right">Высота, мм</td>
                <td><input type="text" class="inputtext" name="form_text_40" value="" size="0"></td>
            </tr>

            <tr>
                <td align="right">Количество мест</td>
                <td><input type="text" class="inputtext" name="form_text_41" value="" size="4"></td>
            </tr>

            <tr>
                <td align="right">Пункт отправления</td>
                <td><input type="text" class="inputtext" name="form_text_42" value="" size="0"></td>
            </tr>

            <tr>
                <td align="right">Пункт назначения</td>
                <td><input type="text" class="inputtext" name="form_text_43" value="" size="0"></td>
            </tr>

            <tr>
                <td align="right">Страхование груза</td>
                <td><input type="checkbox" id="form_checkbox_STRAHOVANIE_GRUZA_44"
                           name="form_checkbox_STRAHOVANIE_GRUZA[]" value="44"><label
                        for="form_checkbox_STRAHOVANIE_GRUZA_44"><span class="">&nbsp;Да</span></label></td>
            </tr>

            <tr>
                <td align="right">Дополнительные условия</td>
                <td><textarea name="form_textarea_45" cols="20" rows="10" class="inputtextarea"></textarea></td>
            </tr>

            <tr>
                <td align="right">Введите символы на картинке</td>
                <td><input type="hidden" name="captcha_sid" value="0041ab8a86b01f806a457d7fa12b8085"><img
                        src="images/captcha.jpg" width="180"
                        height="40"><br><input type="text" name="captcha_word" size="30" maxlength="50" value=""
                                               class="inputtext"></td>
            </tr>

            <tr>
                <td align="right" valign="top"></td>
                <td><input type="submit" name="web_form_submit" value="Отправить запрос"></td>
            </tr>
            </tbody>
        </table>
    </form>
</div>