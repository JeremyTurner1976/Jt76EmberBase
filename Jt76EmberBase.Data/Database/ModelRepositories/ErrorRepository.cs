using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using Jt76EmberBase.Data.Abstract;
using Jt76EmberBase.Data.Models;

namespace Jt76EmberBase.Data.Database.ModelRepositories
{
    //Production (TimedService) 
    //Calls this web.config db and runs procs to run db maintenance daily

    public interface IErrorRepository
    {
        bool Save();
        IQueryable<Error> GetErrors();
        bool AddError(Error newError, bool bSave);
        bool UpdateError(Error error, bool bSave);
        bool DeleteError(int id, bool bSave);
    }

    public class ErrorRepository : ModelRepositoryBase, IErrorRepository
    {
        private readonly Jt76DbContext _context;

        public ErrorRepository(Jt76DbContext context)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            _context = context;
        }

        public bool Save()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //return that a change was made
            return (_context.SaveChanges() > 0);
        }

        public IQueryable<Error> GetErrors()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            return _context.Errors;
        }

        public bool AddError(Error newError, bool bSave)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //want to force this to hit the db if the model is invalid
            newError = (Error) newError.ForceValidData();

            _context.Errors.Add(newError);
            return !bSave || Save();
        }

        public bool UpdateError(Error item, bool bSave)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //want to force this to hit the db if the model is invalid
            item = (Error)item.ForceValidData();

            DeleteError(item.Id, false);
            _context.Errors.Add(item);
            return !bSave || Save();
        }

        public bool DeleteError(int id, bool bSave)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            var item = _context.Errors.FirstOrDefault(x => x.Id == id);
            if (item != null && item.Id != default(int))
            {
                _context.Errors.Remove(item);
                return !bSave || Save();
            }
            else 
                return false;
        }
    }
}