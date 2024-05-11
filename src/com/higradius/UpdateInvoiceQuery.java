package com.higradius;

import java.sql.PreparedStatement;
import java.sql.SQLException;





public class UpdateInvoiceQuery{
	public static PreparedStatement statement;	// Creating a Statement Object.
	public static String updateQuery = " UPDATE film_data SET title= (?),description = (?),release_year= (?),language= (?),director= (?),rating= (?),special_features=(?) WHERE film_id= (?)";
	
	public static void UpdateDataInTable() {
		
		try {
		Class.forName(DataSource.jdbcDriver).newInstance();		//Creating a newInstance of the jdbc Driver.
        
        	DataSource.connectDB();

			statement = DataSource.conn.prepareStatement(updateQuery);
			statement.setString(1,UpdateInvoice.title1);
			statement.setString(2,UpdateInvoice.description1);
			statement.setInt(3,Integer.parseInt(UpdateInvoice.release_year1));
			statement.setString(4,UpdateInvoice.language_name1);
			statement.setString(5,UpdateInvoice.director1);
			statement.setString(6,UpdateInvoice.rating1);
			statement.setString(7,UpdateInvoice.special_features1);
			statement.setInt(8,Integer.parseInt(UpdateInvoice.film_id1));
			if(statement.executeUpdate() != 0) {
				System.out.println("Data Succesfully Updated in the table.");
			}
			else {
				System.out.println("Failed to Update data in the database.");
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}

}
