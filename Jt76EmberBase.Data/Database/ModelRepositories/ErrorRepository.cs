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
        bool DeleteError(int id, bool bSave);
    }

    public class ErrorRepository : ModelRepositoryBase, IErrorRepository
    {
        private const int MaxErrorCount = 50;

        private readonly Jt76DbContext _context;

        public ErrorRepository(Jt76DbContext context)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            _context = context;
        }

        public bool Save()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //no reason to save more than MaxCount
            if (_context.Errors.Count() > MaxErrorCount)
                _context.Errors =
                    _context.Errors.OrderByDescending(x => x.DtCreated).Take(MaxErrorCount) as DbSet<Error>;

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

        public bool DeleteError(int id, bool bSave)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            var error = _context.Errors.FirstOrDefault(x => x.Id == id);
            if (error != null && error.Id != default(int))
            {
                _context.Errors.Remove(error);
                return !bSave || Save();
            }
            else 
                return false;
        }
    }
}