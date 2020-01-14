using IBISWorld.Web.Models;
using IBISWorld.Web.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace IBISWorld.Web.Services
{
    public class GlossaryService : IGlossaryService
    {

        string connStr = ConfigurationManager.AppSettings["myConnectionString"] as string;


        public IEnumerable<TermModel> GetTerms()
        {

            string storedProName = "Select_All_In_Glossary";

            SqlConnection SqlConn = null;

            SqlCommand sqlCMD = null;

            SqlDataReader reader = null;

            IEnumerable<TermModel> termList = null;

            try

            {
                SqlConn = new SqlConnection(connStr);

                SqlConn.Open();

                sqlCMD = new SqlCommand();

                sqlCMD.CommandText = storedProName;

                sqlCMD.CommandType = CommandType.StoredProcedure;

                sqlCMD.Connection = SqlConn;


                reader = sqlCMD.ExecuteReader();

                if (reader.HasRows)

                    termList = GetRecordSet(reader);
            }

            catch (Exception ex)

            {
                throw new Exception(ex.Message, ex.InnerException);
            }

            finally
            {
                SqlConn.Close();
            }

            return termList;

        }

       public TermModel GetTermByID(int deviceID)
        {
            string storedProName = "Select_Term_In_Glossary";

            SqlConnection SqlConn = null;

            SqlCommand sqlCMD = null;

            SqlDataReader reader = null;

            IEnumerable<TermModel> term = null;

            try
            {
                SqlConn = new SqlConnection(connStr);

                SqlConn.Open();

                sqlCMD = new SqlCommand();

                sqlCMD.CommandText = storedProName;

                sqlCMD.CommandType = CommandType.StoredProcedure;

                sqlCMD.Parameters.Add("@ID", SqlDbType.Int).Value = deviceID;

                sqlCMD.Connection = SqlConn;

                reader = sqlCMD.ExecuteReader();

                if (reader.HasRows)

                    term = GetRecordSet(reader);
            }

            catch (Exception ex)

            {
                throw new Exception(ex.Message, ex.InnerException);
            }

            finally
            {
                SqlConn.Close();
            }

            return term.FirstOrDefault();
        }

        public int AddTerm(TermModel termObj)
        {
            string storedProName = "Add_Term_To_Glossary";

            SqlConnection SqlConn = null;

            SqlCommand sqlCMD = null;

            IEnumerable<TermModel> term = null;

            var newTermID = 0;

            try
            {
                SqlConn = new SqlConnection(connStr);

                SqlConn.Open();

                sqlCMD = new SqlCommand();

                sqlCMD.CommandText = storedProName;

                sqlCMD.CommandType = CommandType.StoredProcedure;

                List<SqlParameter> parameters = new List<SqlParameter>();

                parameters.Add(new SqlParameter("@Term", termObj.Term));
                parameters.Add(new SqlParameter("@Definition", termObj.Definition));

               var outputIdParam = new SqlParameter("@RowID", SqlDbType.Int) { Direction = ParameterDirection.Output };

                parameters.Add(outputIdParam);

                sqlCMD.Parameters.AddRange(parameters.ToArray());

                sqlCMD.Connection = SqlConn;

               sqlCMD.ExecuteNonQuery();

                newTermID = (int)outputIdParam.Value;

            }

            catch (Exception ex)

            {
                throw new Exception(ex.Message, ex.InnerException);
            }

            finally
            {
                SqlConn.Close();
            }

            return newTermID;
        }

        public void DeleteTerm(int deviceID)
        {
            string storedProName = "Delete_Term_To_Glossary";

            SqlConnection SqlConn = null;

            SqlCommand sqlCMD = null;

            try
            {
                SqlConn = new SqlConnection(connStr);

                SqlConn.Open();

                sqlCMD = new SqlCommand();

                sqlCMD.CommandText = storedProName;

                sqlCMD.CommandType = CommandType.StoredProcedure;

                sqlCMD.Connection = SqlConn;

                sqlCMD.ExecuteNonQuery();
            }

            catch (Exception ex)
            {
                throw new Exception(ex.Message, ex.InnerException);
            }

            finally
            {
                SqlConn.Close();
            }
        }


        public void EditTerm(TermModel termObj)
        {
            string storedProName = "Edit_Term_To_Glossary";

            SqlConnection SqlConn = null;

            SqlCommand sqlCMD = null;

            IEnumerable<TermModel> term = null;

            //var editTermID = 0;

            try
            {
                SqlConn = new SqlConnection(connStr);

                SqlConn.Open();

                sqlCMD = new SqlCommand();

                sqlCMD.CommandText = storedProName;

                sqlCMD.CommandType = CommandType.StoredProcedure;

                List<SqlParameter> parameters = new List<SqlParameter>();

                parameters.Add(new SqlParameter("@ID", termObj.ID));
                parameters.Add(new SqlParameter("@Term", termObj.Term));
                parameters.Add(new SqlParameter("@Definition", termObj.Definition));       

                sqlCMD.Parameters.AddRange(parameters.ToArray());

                sqlCMD.Connection = SqlConn;

                sqlCMD.ExecuteNonQuery();

            }

            catch (Exception ex)

            {
                throw new Exception(ex.Message, ex.InnerException);
            }

            finally
            {
                SqlConn.Close();
            }
        }


        public IEnumerable<TermModel> GetRecordSet(SqlDataReader reader)
        {

            IList<TermModel> termList = new List<TermModel>();

            try

            {
                while ( reader.Read() )
                {

                    TermModel term = new TermModel();

                    term.ID = Convert.ToInt32(reader["ID"]);
                    term.Term = reader["Term"].ToString();
                    term.Definition = reader["Definition"].ToString();
                    term.DateAdded = reader["DateAdded"].ToString();

                    termList.Add(term);

                }

            }

            catch (Exception ex)
            {
                throw new Exception(ex.Message, ex.InnerException);
            }

            return termList;
        }
    }
}