export default {
  otvoriRealizaciju: async (eventId, vehicleId, vehicleName, employeeId, plannedDate, futureMileage, workDescription, comment, serviceTypeId, eventTypes) => {
    const eventTypeCode = eventTypes?.code || eventTypes;

    await storeValue('realizeEventId', eventId);
    await storeValue('realizeVehicleId', vehicleId);
    await storeValue('realizeVehicleName', vehicleName);
    await storeValue('realizeEmployeeId', employeeId);
    await storeValue('realizePlannedDate', plannedDate);
    await storeValue('realizeFutureMileage', futureMileage);
    await storeValue('realizeWorkDescription', workDescription);
    await storeValue('realizeComment', comment);
    await storeValue('realizeServiceTypeId', serviceTypeId);

    if (eventTypeCode === 'Servis') {
      showModal('realizedService');
      await new Promise(resolve => setTimeout(resolve, 500));
      resetWidget('zaposleni_real', false);
      await new Promise(resolve => setTimeout(resolve, 100));
      resetWidget('tip_servisiranja_real', false);

    } else if (eventTypeCode === 'REGISTRATION') {
      showModal('realizedRegistration');

    } else if (eventTypeCode === 'TYRE_BUYING') {
      showModal('realizedTyreBuying');

    } else if (eventTypeCode === 'TYRE_CHANGE') {
      showModal('realizedTyreChange');

    } else if (eventTypeCode === 'CAR_WASH') {
      showModal('realizedCarWash');

    } else if (eventTypeCode === 'FUEL') {
      showModal('realizedFuel');

    } else if (eventTypeCode === 'KASKO') {
      showModal('realizedKasko');

    } else {
      showModal('realizedOther');
    }
  }
}