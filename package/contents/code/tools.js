/*
*  Copyright 2018  Michail Vourlakos <mvourlakos@gmail.com>
*
*  This file is part of Latte-Dock
*
*  Latte-Dock is free software; you can redistribute it and/or
*  modify it under the terms of the GNU General Public License as
*  published by the Free Software Foundation; either version 2 of
*  the License, or (at your option) any later version.
*
*  Latte-Dock is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  You should have received a copy of the GNU General Public License
*  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function addButton(preparedArray, buttonType) {
    if (buttonType === AppletDecoration.Types.Close) {
        preparedArray.push({
                               buttonType: AppletDecoration.Types.Close,
                               windowOperation: AppletDecoration.Types.ActionClose
                           });
    } else if (buttonType === AppletDecoration.Types.Maximize) {
        preparedArray.push({
                               buttonType: AppletDecoration.Types.Maximize,
                               windowOperation: AppletDecoration.Types.ToggleMaximize
                           });
    } else if (buttonType === AppletDecoration.Types.Minimize) {
        preparedArray.push({
                               buttonType: AppletDecoration.Types.Minimize,
                               windowOperation: AppletDecoration.Types.ToggleMinimize
                           });
    } else if (buttonType === AppletDecoration.Types.OnAllDesktops) {
        preparedArray.push({
                               buttonType: AppletDecoration.Types.OnAllDesktops,
                               windowOperation: AppletDecoration.Types.TogglePinToAllDesktops
                           });
    }
}

function initializeControlButtonsModel(buttons, toArray, toListModel) {
    toArray.length = 0;

    for (var i=0; i < buttons.length; ++i) {
        addButton(toArray, buttons[i]);
    }

    toListModel.clear()

    for (var i = 0; i < toArray.length; ++i) {
        toListModel.append(toArray[i]);
    }
}
