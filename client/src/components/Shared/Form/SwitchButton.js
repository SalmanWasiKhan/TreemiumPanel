import { Switch } from '@headlessui/react';

const SwitchButton = ({ enabled, setEnabled, label }) => {
  return (
    <Switch.Group as="div" className="flex items-center gap-3">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? 'bg-success' : 'bg-[#E8EDFC]'
        } relative inline-flex h-5 w-11 items-center rounded-full transition duration-300`}
      >
        <span className="sr-only">{label}</span>
        <span
          className={`${
            enabled ? 'translate-x-[1.625rem]' : 'translate-x-0.5'
          } inline-block h-4 w-4 transform rounded-full bg-white transition duration-300`}
        />
      </Switch>
      <Switch.Label className="font-medium text-heading">{label}</Switch.Label>
    </Switch.Group>
  );
};

export default SwitchButton;
