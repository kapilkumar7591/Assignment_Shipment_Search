export interface ShipmentList {
  AssignedToUserId: string;
  DeliveryMethod: string;
  ExpectedShipmentDate: string;
  OrderNo: string;
  ScacAndService: string;
  ShipNode: string;
  ShipmentKey: string;
  ShipmentNo: string;
  Status: string;
  BillToAddress: {
    DayPhone: string;
    EMailID: string;
    FirstName: string;
    LastName: string;
    PersonInfoKey: string;
  };
  ShipmentLines: {
    TotalNumberOfRecords: string;
  };
}

export interface Shipment {
  AssignedToUserId: string;
  DeliveryMethod: string;
  ExpectedShipmentDate: string;
  OrderNo: string;
  ScacAndService: string;
  ShipNode: string;
  ShipmentKey: string;
  ShipmentNo: string;
  Status: string;
  BillToAddress: {
    DayPhone: string;
    EMailID: string;
    FirstName: string;
    LastName: string;
    PersonInfoKey: string;
  };
  ShipmentLines: {
    TotalNumberOfRecords: string;
  };
}

export const Shipments = {
  TotalNumberOfRecords: '2',
  Shipment: [
    {
      AssignedToUserId: 'abrooks',
      DeliveryMethod: 'SHP',
      ExpectedShipmentDate: '27-10-2017',
      OrderNo: 'SFS1000001',
      ScacAndService: 'UPSNGround',
      ShipNode: 'Mtrx_Store_1',
      ShipmentKey: 'SFS1000001_SHPKEY',
      ShipmentNo: 'SFS1000001SHPNO',
      Status: 'Cancelled',
      BillToAddress: {
        DayPhone: '123456789',
        EMailID: 'Zymer@org.com',
        FirstName: 'Ben',
        LastName: 'Zymer',
        PersonInfoKey: '1000001',
      },
      ShipmentLines: {
        TotalNumberOfRecords: '4',
      },
    },
    {
      AssignedToUserId: 'amgr',
      DeliveryMethod: 'PICK',
      ExpectedShipmentDate: '28-10-2017',
      OrderNo: 'PICK1000001',
      ScacAndService: '',
      ShipNode: 'Mtrx_Store_1',
      ShipmentKey: 'PICK1000001_SHPKEY',
      ShipmentNo: 'PICK1000001SHPNO',
      Status: 'Ready for Backroom Pick',
      BillToAddress: {
        DayPhone: '1234567890',
        EMailID: 'adoyle@org.com',
        FirstName: 'Abby',
        LastName: 'Doyle',
        PersonInfoKey: '2000001',
      },
      ShipmentLines: {
        TotalNumberOfRecords: '6',
      },
    },
  ],
};

export interface ShipmentDetail {
  AssignedToUserId: string;
  Status: string;
  DeliveryMethod: string;
  ExpectedShipmentDate: string;
  OrderNo: string;
  ScacAndService: string;
  ShipmentKey: string;
  ShipmentNo: string;
  BillToAddress: Address;
  ToAddress: Address;
  ShipmentLines: {
    TotalNumberOfRecords: string;
    ShipmentLine: ShipmentLine[];
  };
}

export interface ShipmentLine {
  Quantity: string;
  ShipmentLineKey: string;
  OrderLine: {
    ItemDetails: {
      DisplayUnitOfMeasure: string;
      Description: string;
      ImageUrl: string;
      ItemID: string;
    };
  };
}

export interface Address {
  FirstName: string;
  LastName: string;
  EmailID: string;
  DayPhone?: string;
  AddressID: string;
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  Country: string;
  State: string;
  ZipCode: string;
  PersonInfoKey: string;
  Phonenumber?: string;
}

export const ShipmentsDetails = {
  TotalNumberOfRecords: '2',
  Shipment: [
    {
      AssignedToUserId: 'amgr',
      Status: 'Ready for Backroom Pick',
      DeliveryMethod: 'PICK',
      ExpectedShipmentDate: '27-10-2018',
      OrderNo: 'PICK1000001',
      ScacAndService: '',
      ShipmentKey: 'PICK1000001SHPKEY',
      ShipmentNo: 'PICK1000001SHPNO',
      BillToAddress: {
        FirstName: 'John',
        LastName: 'Parks',
        EmailID: 'john@example.com',
        Phonenumber: '1234567890',
        AddressID: '200001',
        AddressLine1: '987, Broadview Avenue',
        AddressLine2: '',
        City: 'Omaha',
        Country: 'US',
        State: 'NE',
        ZipCode: '68101',
        PersonInfoKey: '1000002',
      },
      ToAddress: {
        FirstName: 'Abby',
        LastName: 'Doyle',
        EmailID: 'adoyle@example.com',
        DayPhone: '6478390821',
        AddressID: '200002',
        AddressLine1: '6849, Wolfe Road',
        AddressLine2: '123',
        City: 'Sunnydale',
        Country: 'US',
        State: 'CA',
        ZipCode: '94049',
        PersonInfoKey: '100001',
      },
      ShipmentLines: {
        TotalNumberOfRecords: '2',
        ShipmentLine: [
          {
            Quantity: '2',
            ShipmentLineKey: 'PICK100001SHPLINEKEY',
            OrderLine: {
              ItemDetails: {
                DisplayUnitOfMeasure: 'Each',
                Description: 'Frigidaire Window Air Conditioner 1200-BTU',
                ImageUrl: '<PATH_TO_IMAGE>',
                ItemID: '100001',
              },
            },
          },
          {
            Quantity: '2',
            ShipmentLineKey: 'PICK100002SHPLINEKEY',
            OrderLine: {
              ItemDetails: {
                DisplayUnitOfMeasure: 'Each',
                Description: 'Hunter Regalia 60-in New Bronze Ceiling Fan',
                ImageUrl: '<PATH_TO_IMAGE>',
                ItemID: '100002 ',
              },
            },
          },
        ],
      },
    },
  ],
};
