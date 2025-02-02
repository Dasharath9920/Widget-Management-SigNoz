import { useContext } from 'react'
import widgets from '../data';
import { MyContext } from '../ContextProvider';
import { Actions, Themes, WidgetType } from '../constants';

const AddWidgetModal = ({ isOpen, closeModal}: { isOpen: boolean, closeModal: () => void }) => {
   const { state, dispatch } = useContext(MyContext);
  const isDarkTheme = state.theme === Themes.DARK;
  

   const addedWidgets = [...state.addedWidgets]
   const filteredWidgets = widgets.filter(widget => !addedWidgets.find(addedWidget => addedWidget.id === widget.id));

   const addWidget = (widget: WidgetType) => {
    addedWidgets.push(widget);
    dispatch({
      type: Actions.UPDATE_WIDGETS,
      payload: addedWidgets
    });
    closeModal();
   }

  return (
   <div className={`relative z-100 ${isOpen? 'visible': 'hidden'}`}>
    <div className="fixed inset-0 bg-black/75 transition-opacity"></div>
  
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
        <div className={`relative max-w-[400px] transform overflow-hidden rounded-lg text-left transition-all ${isDarkTheme? 'bg-blue-950/80 text-white': 'bg-white'}`}>
          <div className={`flex flex-col min-w-[320px] px-4 pt-5 pb-4 sm:p-6 sm:pb-4`}>
            <div className={`flex flex-col ${filteredWidgets.length? '': 'hidden'}`}>
              <h1 className={`text-base pb-2 font-semibold border-b-2 border-gray-400 mb-5 ${isDarkTheme? 'text-white': ''}`}>Select widget</h1>
              <ul className='flex items-center flex-wrap gap-2 max-h-[300px] overflow-y-scroll p-1'>
                {filteredWidgets.map((widget) => (
                    <li key={widget.id} className={`relative p-2 rounded-xl text-[0.7rem] h-[80px] w-[80px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102 group ${isDarkTheme? 'bg-blue-900 text-gray-200': 'bg-blue-950 text-white'}`} onClick={() => addWidget(widget)}>
                      <span className='group-hover:opacity-20'>{widget.title}</span>
                      <span className='absolute inset-0 flex items-center justify-center text-2xl font-bold opacity-0 group-hover:opacity-100'>+</span>
                    </li>
                ))}
              </ul>
            </div>
            <p className={`text-center font-base ${filteredWidgets.length? 'hidden': ''}`}>
              <span className='font-semibold block mb-4 text-xl'>Oops!!!</span>
              <span>Out of Widgets? Don't worry, new widgets coming soon...</span>
            </p>
          </div>
          <div className={`px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ${isDarkTheme? 'bg-blue-950': 'bg-blue-950/20'}`}>
            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-500 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => closeModal()}>{filteredWidgets.length? 'Cancel': 'Close'}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddWidgetModal;