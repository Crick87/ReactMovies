import React from 'react';
import Dialog from '../components/Dialog/Dialog';

export default {
    title: 'Components/Dialog',
    component: Dialog,
};

const Template = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'My Dialog Title',
    children: <p>This is the content of the dialog.</p>,
    onClose: () => console.log('Dialog closed'),
};

export const CloseAction = Template.bind({});
CloseAction.args = {
    title: 'Close Action',
    children: <p>This dialog has a custom close action. Test it!</p>,
    onClose: () => alert('Close action alert'),
};

export const FocusTrap = Template.bind({});
FocusTrap.args = {
    title: 'FocusTrap',
    children: (
        <div>
            <p>This dialog contains form with focus trap.</p>
            <input type="text" placeholder="Enter text" />
            <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </select>
        </div>
    ),
    onClose: () => console.log('Dialog closed'),
};