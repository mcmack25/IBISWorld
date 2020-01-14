using IBISWorld.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace IBISWorld.Web.Services.Interfaces
{
    public interface IGlossaryService
    {
        IEnumerable<TermModel> GetTerms();
        TermModel GetTermByID(int deviceID);

        int AddTerm(TermModel sensor);

        void EditTerm(TermModel sensor);

        void DeleteTerm(int termID);

    }
}